import { delay, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { setProfile } from "./actions";
import { SET_NAME } from "./actionTypes";

const setName = function*({
  payload: { name }
}) {
  try {
    yield put(setProfile({ profile: null }));
    yield delay(500);
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${name}`
    );
    yield put(setProfile({ profile: response.data }));
  } catch (error) {

  } finally {
    
  }
};
const saga = function*() {
  yield takeLatest(SET_NAME, setName);
};

export default saga;
