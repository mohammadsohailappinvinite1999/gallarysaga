import { put, takeEvery, all } from "redux-saga/effects";


function* helloSaga() {
  console.log("Hello Sagas!");
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
