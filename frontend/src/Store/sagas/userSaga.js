import { takeLatest, put, call } from 'redux-saga/effects';
import axios from '../../Config/axios';
import {
  FETCH_USER_DATA,
  fetchUserDataSuccess,
  fetchDataFail
} from '../reducers/userReducer';

function* fetchUsersData() {
  try {
    const response = yield call(axios.get, 'users');
    if (response.data.success === true) {
      yield put(fetchUserDataSuccess(response.data.data));
    } else {
      yield put(fetchDataFail());
    }
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

export function* fetchUsersDataSaga() {
  try {
    yield takeLatest(FETCH_USER_DATA, fetchUsersData);
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}
