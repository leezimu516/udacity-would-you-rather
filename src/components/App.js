import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux'
import Dashboard from "./Dashboard";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./Nav";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Poll from "./Poll";
import Login from "./Login";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {loading, user, avatar, signedIn} = this.props
        let authed = false;
        if (user !== '') {
            authed = true
        }
        console.log(loading, user, authed)
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav user={user} avatar={avatar}/>
                    {signedIn === false
                        ? <Login/> :
                        <div>
                            <Route path='/' exact component={Dashboard}/>
                            <Route path='/questions/:id' exact component={Poll}/>
                            <Route path='/leaderboard' exact component={LeaderBoard}/>
                            <Route path='/add' exact component={NewQuestion}/>

                        </div>
                    }

                </div>


            </BrowserRouter>

        );
    }
}

function mapStateToProps({authedUserReducer, usersReducer}) {
    const userObj = usersReducer[authedUserReducer]
    let user = '';
    let avatar = null
    if (userObj) {
        user = userObj.name
        avatar = userObj.avatarURL

    }

    console.log(userObj, avatar)
    return {
        loading: authedUserReducer === null,
        user,
        avatar,
        signedIn: authedUserReducer !== null,
    }
}

export default connect(mapStateToProps)(App);
