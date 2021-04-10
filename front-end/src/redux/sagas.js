/* eslint-disable no-unused-vars */
import { all } from "redux-saga/effects";
import entryandExitType from "./entryandExitType/saga";

export default function* rootSaga(getState) {
  yield all([entryandExitType()]);
}
