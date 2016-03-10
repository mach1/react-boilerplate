import React from 'react'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App.jsx'
import SignIn from './views/SignIn.jsx'
import Dashboard from './views/Dashboard.jsx'
import reducers from './reducers'
import { syncHistory, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createHashHistory'

const history = createHistory()

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'))
