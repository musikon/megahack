import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage'
import UserPage from './Pages/UserPage'
import AllInfoPage from './Pages/AllInfoPage'

import Layout from './components/Layout'

const RoutWrapper = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/user/:id" component={UserPage} />
      <Route exact path="/info" component={AllInfoPage} />
    </Layout>
  </Router>
);

export default RoutWrapper
