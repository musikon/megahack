import React, { Component } from 'react';

import Router from './Router'

import './App.css';

class App extends Component {

  simpleAction = () => {
    this.props.simpleAction();
  };

  render() {
    return <Router />
  }
}
export default App;