import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (

            <nav className='nav'>
                <ul>
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