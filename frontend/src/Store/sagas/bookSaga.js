import { takeLatest, put, call } from 'redux-saga/effects';
import axios from '../../Config/axios';
import {
  FETCH_BOOK_DATA,
  fetchBookDataSuccess,
  fetchDataFail
} from '../reducers/bookReducer';

function* fetchBooksData() {
  try {
    const response = yield call(axios.get, 'books');
    if (response.data.success === true) {
      yield put(fetchBookDataSuccess(response.data.data));
    } else {
      yield put(fetchDataFail());
    }
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

export function* fetchBooksDataSaga() {
  try {
    yield takeLatest(FETCH_BOOK_DATA, fetchBooksData);
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}
