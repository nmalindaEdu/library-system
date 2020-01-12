export const FETCH_DASHBOARD_DATA = 'lms/dashboard/FETCH_DASHBOARD_DATA';
export const FETCH_DASHBOARD_DATA_SUCCESS =
  'lms/dashboard/FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_BOOK_STATUS = 'lms/dashboard/FETCH_BOOK_STATUS';

export const FETCH_DATA_FAIL = 'lms/dashboard/FETCH_DATA_FAIL';

const initialState = {
  dashboardData: [],
  booking: 'No',
  loading: false
};
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_BOOK_STATUS:
      return {
        ...state,
        booking: action.booking,
        loading: true
      };
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        dashboardData: action.dashboardData,
        loading: true
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default dashboardReducer;

export const fetchDashboardData = (booking) => {
  return { type: FETCH_DASHBOARD_DATA, booking };
};

export const fetchBookingStatus = (booking) => {
  return { type: FETCH_BOOK_STATUS, booking };
};

export const fetchDashboardDataSuccess = (dashboardData) => {
  return { type: FETCH_DASHBOARD_DATA_SUCCESS, dashboardData };
};

export const fetchDataFail = (error) => {
  return {
    type: FETCH_DATA_FAIL,
    error
  };
};
