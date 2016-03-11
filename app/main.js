import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes.jsx'
import Root from './containers/Root.jsx'
import configureStore from './store/configureStore.js'
import createHistory from 'history/lib/createHashHistory'
import { syncHistoryWithStore } from 'react-router-redux'

const history = createHistory()
const store = configureStore({}, history)
const syncedHistory = syncHistoryWithStore(history, store)

render(
  <Root
    store={store}
    history={syncedHistory}
    routes={routes}
  />,
  document.getElementById('container')
)
