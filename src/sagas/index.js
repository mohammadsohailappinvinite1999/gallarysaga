import { takeEvery, put, all } from "redux-saga/effects";
import imageSaga from "./ImageSaga";

function* workerSaga() {
  console.log("Hey From Worker");
  yield put({ type: "ACTION_FROM" });
}

//watcher saga
function* rootSaga() {
  yield all([imageSaga()]);
}

export default rootSaga;
