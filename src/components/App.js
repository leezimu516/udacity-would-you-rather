import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect()(App);
