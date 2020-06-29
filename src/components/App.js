import React, {Component, Fragment} from 'react';
import '../App.css';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux'
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Router} from "react-router-dom";
import AnswerPoll from "./AnswerPoll";
import Nav from "./Nav";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        console.log(this.props.loading)
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav user={this.props.user}/>

                    {this.props.loading === true
                        ? <h1>loading</h1> :
                        <div>
                            <Route path='/' exact component={Dashboard}/>
                            <Route path='/questions/:id' exact component={AnswerPoll}/>
                            {/*<Route path='/leaderboard' exact component={LeaderBoard}/>*/}
                            {/*<Route path='/new' exact component={NewQeustion}/>*/}
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
    if (userObj) {
        user = userObj.name
    }

    console.log(usersReducer[authedUserReducer])
    return {
        loading: authedUserReducer === null,
        user
    }
}

export default connect(mapStateToProps)(App);
