import { takeLatest, put, call } from 'redux-saga/effects';
import axios from '../../Config/axios';
import {
  fetchDashboardDataSuccess,
  fetchDataFail,
  FETCH_DASHBOARD_DATA
} from '../reducers/dashboardReducer';

function* fetchDashboardData({ booking }) {
  try {
    const response = yield call(axios.get, `bookmovements?booking=${booking}`);
    if (response.data.success === true) {
      yield put(fetchDashboardDataSuccess(response.data.data));
    } else {
      yield put(fetchDataFail());
    }
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

export function* fetchDashboardDataSaga() {
  try {
    yield takeLatest(FETCH_DASHBOARD_DATA, fetchDashboardData);
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}
