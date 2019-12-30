import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { axios } from "axios";
const API_URL_INFO = "https://api.publicapis.org/random";

function* loadFacebookData() {
  const api_info = yield axios.get(API_URL_INFO).then(res => {
    const result = res.data.entries[0];
    return result;
  });

  yield put({ type: "HANDLE_SUCCESS_FACEBOOK", api_info });
}

// function* actionWatcher() {
//   yield facebookData("GET_NEWS", fetchNews);
// }

export const helloSaga = function* helloSaga() {
  console.log("Hello Sagas!");
};

// export default mySaga;
