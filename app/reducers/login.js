import * as types from '../constants/ActionTypes'

const initialState = {
  login: false,
  loading: false
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCEEDED:
      return {
        ...state,
        login: true,
        loading: false
      }
    case types.LOGIN_IN_PROGRESS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
