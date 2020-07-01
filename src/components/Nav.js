import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
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
                    {user === null ? null
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
                                <NavLink to='/logout' activeClassName='active'>
                                    Logout
                                </NavLink>
                            </li>

                        </div>
                    }


                </ul>
            </nav>
        )
    }

}

export default Nav;