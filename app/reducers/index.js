import { combineReducers } from 'redux'
import login from './login'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  login,
  routing: routerReducer
})
