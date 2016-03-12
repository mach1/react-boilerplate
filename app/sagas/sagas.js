import { take, call, put, fork } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes.js'
import { login } from '../api/Api.js'
import { push } from 'react-router-redux'

function * doLogin (details) {
  try {
    yield put({ type: types.LOGIN_IN_PROGRESS })
    yield call(login, details)
    yield put({ type: types.LOGIN_SUCCEEDED, user: details })
    yield put(push('/dashboard'))
  } catch (e) {
    yield put({ type: types.LOGIN_FAILED, message: e.message })
  }
}

function * logout (action) {
  yield put(push('/'))
}

function * watchLogin () {
  while (true) {
    const { details } = yield take(types.DO_LOGIN)
    yield fork(doLogin, details)
  }
}

function * watchLogout () {
  while (true) {
    yield take(types.LOGOUT)
    yield fork(logout)
  }
}

export default function * mySaga () {
  yield [
    fork(watchLogin),
    fork(watchLogout)
  ]
}
