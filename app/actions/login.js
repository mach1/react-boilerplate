import * as types from '../constants/ActionTypes'

export function doLogin (details) {
  return { type: types.DO_LOGIN, details }
}

export function logout () {
  return { type: types.LOGOUT }
}
