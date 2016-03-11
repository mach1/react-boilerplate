import 'babel-polyfill'
import React from 'react'
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { render } from 'react-dom'
import reducers from './reducers'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/lib/createHashHistory'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from './sagas/sagas.js'
import createLogger from 'redux-logger'
import routes from './routes.jsx'
import Root from './containers/Root.jsx'

const history = createHistory()
const logger = createLogger()

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware(mySaga)
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware, middleware))
const syncedHistory = syncHistoryWithStore(history, store)

render(
  <Root
    store={store}
    history={history}
    routes={routes}
  />,
  document.getElementById('container')
)
