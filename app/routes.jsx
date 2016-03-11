import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App.jsx'
import SignIn from './views/SignIn.jsx'
import Dashboard from './views/Dashboard.jsx'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SignIn} />
    <Route path="dashboard" component={Dashboard} />
  </Route>
)

