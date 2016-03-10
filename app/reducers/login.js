import * as types from '../constants/ActionTypes'

const initialState = {
  login: false
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.DO_LOGIN:
      return {
        login: true
      }
    default:
      return state
  }
}
