import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {setAuthedUser} from "../actions/authedUser";
import { connect } from 'react-redux';
import Button from "react-bootstrap/Button";


class Nav extends Component {

    handleLogout = () => { // Handle logout button click
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }

    render() {
        console.log(this.props)
        const {user, avatar} = this.props
        return (

            <nav className='nav'>
                <ul className='nav-ul'>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    {user === '' ? null
                        :
                        <div className='nav-user'>

                            <li>
                                Hello {user}

                            </li>
                            <img
                                src={avatar}
                                alt={`Avatar of ${user}`}
                                className='nav-avatar'/>

                            <li>
                                <Button variant="outline-primary" onClick={this.handleLogout}>Logout</Button>

                            </li>

                        </div>
                    }


                </ul>
            </nav>
        )
    }

}

export default connect()(Nav);