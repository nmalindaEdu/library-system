import { takeLatest, put, call } from 'redux-saga/effects';
import axios from '../../Config/axios';
import {
  FETCH_USER_DATA,
  fetchUserDataSuccess,
  fetchDataFail,
  DELETE_USER,
  fetchUserData
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

function* deleteUser({ userId }) {
  try {
    const response = yield call(axios.delete, `users/${userId}`);
    if (response) {
      if (response.data.success === true) {
        yield put(fetchUserData());
      } else {
        yield put(fetchDataFail());
      }
    } else {
      yield put(fetchDataFail());
    }
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

export function* deleteUserSaga() {
  try {
    yield takeLatest(DELETE_USER, deleteUser);
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}
