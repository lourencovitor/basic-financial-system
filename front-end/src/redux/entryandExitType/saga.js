/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { backendClient } from "../../utils/http";
import { GET_EXTRY_AND_EXIT_TYPE, POST_EXTRY_AND_EXIT_TYPE } from "../actions";
import {
  getExtryAndExitTypeSuccess,
  getExtryAndExitTypeError,
  postExtryAndExitTypeSuccess,
  postExtryAndExitTypeError,
} from "./actions";

const getExtryAndExitTypeAsync = ({ userId }) =>
  backendClient
    .get(`/entryandExit/${userId}`)
    .then((extryAndExitType) => extryAndExitType)
    .catch((error) => ({
      data: { success: false, message: error.message },
    }));

function* getExtryAndExitType({ payload }) {
  try {
    const response = yield call(getExtryAndExitTypeAsync, payload);
    yield put(getExtryAndExitTypeSuccess(response.data));
  } catch (error) {
    yield put(getExtryAndExitTypeError(error));
  }
}

export function* watchgetExtryAndExitType() {
  yield takeEvery(GET_EXTRY_AND_EXIT_TYPE, getExtryAndExitType);
}

const postExtryAndExitTypeAsync = ({ data }) =>
  backendClient
    .post(`/entryandExit`, data)
    .then((extryAndExitType) => extryAndExitType)
    .catch((error) => ({
      data: { success: false, message: error.message },
    }));

function* postExtryAndExitType({ payload }) {
  try {
    const response = yield call(postExtryAndExitTypeAsync, payload);
    if (payload.callback) payload.callback.success();
    yield put(postExtryAndExitTypeSuccess(response));
  } catch (error) {
    yield put(postExtryAndExitTypeError(error));
  }
}

export function* watchpostExtryAndExitType() {
  yield takeEvery(POST_EXTRY_AND_EXIT_TYPE, postExtryAndExitType);
}

export default function* rootSaga() {
  yield all([fork(watchgetExtryAndExitType), fork(watchpostExtryAndExitType)]);
}
