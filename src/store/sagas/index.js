import { helloSaga } from "./api_info";
import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([helloSaga()]);
}
