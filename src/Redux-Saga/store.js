import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { reducer } from "./reducers";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
