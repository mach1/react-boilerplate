import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers'
import rootSaga from '../sagas/sagas.js'

export default function configureStore(initialState, history) {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      createLogger(),
      createSagaMiddleware(rootSaga),
      routerMiddleware(history)
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

