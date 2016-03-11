import React from 'react'
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import App from './App.jsx'
import SignIn from './views/SignIn.jsx'
import Dashboard from './views/Dashboard.jsx'
import reducers from './reducers'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/lib/createHashHistory'

const history = createHistory()

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

// Sync dispatched route actions to the history

const middleware = routerMiddleware(history)
const store = createStore(reducer, applyMiddleware(middleware))
window.store = store
const syncedHistory = syncHistoryWithStore(history, store)

render((
  <Provider store={store}>
    <Router history={syncedHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
        <Route path="dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'))
