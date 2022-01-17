import { put, call, takeEvery, select } from "redux-saga/effects";
import { setImages, setError } from "../actions/imageActions";
import { fetchImage } from "../Api/fetchImage";

export const getPage = (state) => state.page;

export function* handlerFetchImageSaga() {
  const page = yield select(getPage);
  const { data, error } = yield call(fetchImage, page);
  if (data) {
    yield put(setImages(data.photos));
  } else {
    yield put(setError(error));
  }
}


export default function* watchImageLoadSaga() {
  yield takeEvery("IMAGE_LOAD", handlerFetchImageSaga);
}
