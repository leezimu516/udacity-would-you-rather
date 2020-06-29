import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux'
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Router} from "react-router-dom";
import AnswerPoll from "./AnswerPoll";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        console.log(this.props.loading)
        return (
            <BrowserRouter>

                <div className="App">
                    {this.props.loading === true
                        ? <h1>loading</h1> :
                        <div>
                            <Route path='/' exact component={Dashboard}/>
                            <Route path='/questions/:question_id' exact component={AnswerPoll}/>
                            {/*<Route path='/' exact component={Dashboard}/>*/}

                        </div>
                    }

                </div>


            </BrowserRouter>

        );
    }
}

function mapStateToProps({authedUserReducer}) {
    return {
        loading: authedUserReducer === null
    }
}

export default connect(mapStateToProps)(App);
