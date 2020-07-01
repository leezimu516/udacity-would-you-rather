import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        console.log(this.props)
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

                    <div className='nav-user'>
                        <li>
                            Hello {this.props.user}

                        </li>
                        <img
                         src={this.props.avatar}
                         alt={`Avatar of ${this.props.user}`}
                        className='nav-avatar'/>

                        <li>
                            <NavLink to='/logout' activeClassName='active'>
                                Logout
                            </NavLink>
                        </li>
                    </div>


                </ul>
            </nav>
        )
    }

}

export default Nav;