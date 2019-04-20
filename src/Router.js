import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage'

const RoutWrapper = () => (
  <Router>
    <Route exact path="/" component={MainPage} />
  </Router>
);

export default RoutWrapper
