import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux'
import Dashboard from "./Dashboard";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        console.log(this.props.loading)
        return (
            <div className="App">
                {this.props.loading === true
                    ? <h1>loading</h1>:
                <Dashboard/>}

            </div>
        );
    }
}

function mapStateToProps( {authedUserReducer}) {
    return {
        loading: authedUserReducer === null
    }
}
export default connect(mapStateToProps)(App);
