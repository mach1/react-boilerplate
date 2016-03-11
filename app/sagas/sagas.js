import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes.js'
import { login } from '../api/Api.js'
import { push } from 'react-router-redux'

function* doLogin(action) {
  try {
    const user = yield call(login, action.details)
    yield put({ type: types.LOGIN_SUCCEEDED, user: action.details })
    yield put(push('/dashboard'))
  } catch(e) {
    yield put({ type: types.LOGIN_FAILED, message: e.message })
  }
}

export function* mySaga() {
  yield* takeEvery(types.DO_LOGIN, doLogin)
}
