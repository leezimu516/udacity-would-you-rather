import React, {Component, Fragment} from 'react';
import '../App.css';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux'
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Router} from "react-router-dom";
import AnswerPoll from "./AnswerPoll";
import Nav from "./Nav";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Poll from "./Poll";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        console.log(this.props.loading)
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav user={this.props.user} avatar={this.props.avatar}/>
                    {this.props.loading === true
                        ? <h1>loading</h1> :
                        <div>
                            <Route path='/' exact component={Dashboard}/>
                            {/*<Route path='/questions/:id' exact component={AnswerPoll}/>*/}
                            <Route path='/questions/:id' exact component={Poll}/>
                            <Route path='/leaderboard' exact component={LeaderBoard}/>
                            <Route path='/new' exact component={NewQuestion}/>
                        </div>
                    }

                </div>


            </BrowserRouter>

        );
    }
}

function mapStateToProps({authedUserReducer, usersReducer}) {
    const userObj = usersReducer[authedUserReducer]
    let user = null;
    let avatar = null
    if (userObj) {
        user = userObj.name
        avatar = userObj.avatarURL

    }

    console.log(userObj, avatar)
    return {
        loading: authedUserReducer === null,
        user,
        avatar
    }
}

export default connect(mapStateToProps)(App);
