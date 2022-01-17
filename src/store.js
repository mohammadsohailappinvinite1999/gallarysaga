import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import imageReducer from "./reducer/imageReducer";
import pageReducer from "./reducer/pageReducer";
import rootSaga from "./sagas/index";

const Globalreducer = combineReducers({
  counter: reducer,
  images: imageReducer,
  page: pageReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Globalreducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
