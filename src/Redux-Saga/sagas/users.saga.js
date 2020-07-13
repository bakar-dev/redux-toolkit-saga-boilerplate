import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchUsersStart,
  fetchUsersSuccesss,
  fetchUsersError,
} from "../slices/users.slice";
import { FETCH_USERS } from "../../Constants/sagaActions";
import { callAPI } from "../../Services/axios";

export function* fetchDataSaga() {
  try {
    console.log("here in saga", process.env);
    yield put(fetchUsersStart());
    const result = yield call(() =>
      callAPI({ url: process.env.REACT_APP_GITHUB_API })
    );
    console.log("REsult", result);
    yield put(fetchUsersSuccesss(result.data));
  } catch (e) {
    yield put(fetchUsersError(e));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USERS, fetchDataSaga);
}
