import * as types from '../constants/ActionTypes'
import { Map } from 'immutable'

const initialState = Map({
  login: false,
  loading: false
})

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCEEDED:
      return state.merge({
        login: true,
        loading: false
      })
    case types.LOGIN_IN_PROGRESS:
      return state.merge({
        loading: true
      })
    case types.LOGOUT:
      return state.merge({
        login: false
      })
    default:
      return state
  }
}
