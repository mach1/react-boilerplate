import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App.jsx'
import SignIn from './views/SignIn.jsx'
import Dashboard from './views/Dashboard.jsx'
import { push } from 'react-router-redux'


export default function createRoutes(store) {
  function requireAuth(nextState, replaceState) {
    console.log(store.getState().login)
    if (!store.getState().login.get('login')) {
      replaceState({ nextPathname: nextState.location.pathname }, '/')
    }
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={SignIn} />
      <Route path="login" component={SignIn} />
      <Route path="dashboard" onEnter={requireAuth} component={Dashboard} />
    </Route>
  )
}
