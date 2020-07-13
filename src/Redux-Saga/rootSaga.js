import { all, fork } from "redux-saga/effects";
import userSaga from "./sagas/users.saga";
export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
