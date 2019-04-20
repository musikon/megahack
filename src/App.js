import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleActions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import MainPage from './Pages/MainPage'

import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component {

  simpleAction = () => {
    this.props.simpleAction();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <Link to="/">back</Link>
          <Link to="/about">next</Link>
          <Button>Button</Button>
          <Route exact path="/" component={MainPage} />
        </div>
      </Router>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);