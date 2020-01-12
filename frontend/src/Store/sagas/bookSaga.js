import { takeLatest, put, call } from 'redux-saga/effects';
import axios from '../../Config/axios';
import {
  FETCH_BOOK_DATA,
  fetchBookDataSuccess,
  fetchDataFail,
  DELETE_BOOK,
  fetchBookData
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

function* deleteBook({ bookId }) {
  try {
    const response = yield call(axios.delete, `books/${bookId}`);
    if (response) {
      if (response.data.success === true) {
        yield put(fetchBookData());
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

export function* deleteBookSaga() {
  try {
    yield takeLatest(DELETE_BOOK, deleteBook);
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}
