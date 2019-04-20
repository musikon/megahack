import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/simpleActions';

import Router from './Router'
import Layout from './components/Layout'

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
      <Layout>
        <Router />
      </Layout>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);