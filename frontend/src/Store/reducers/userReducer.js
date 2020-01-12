export const FETCH_USER_DATA = 'lms/user/FETCH_USER_DATA';
export const FETCH_USER_DATA_SUCCESS = 'lms/user/FETCH_USER_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'lms/user/FETCH_DATA_FAIL';
export const SET_USER_NAME = 'lms/user/SET_USER_NAME';

const initialState = {
  loading: false,
  userData: [],
  userName: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, loading: true };
    case FETCH_USER_DATA_SUCCESS:
      return { ...state, userData: action.userData, loading: false };
    case FETCH_DATA_FAIL:
      return { ...state, loading: false };
    case SET_USER_NAME:
      return { ...state, userName: action.userName };

    default:
      return state;
  }
};
export default userReducer;

export const fetchUserData = () => {
  return { type: FETCH_USER_DATA };
};
export const fetchUserDataSuccess = (userData) => {
  return { type: FETCH_USER_DATA_SUCCESS, userData };
};
export const fetchDataFail = (error) => {
  return { type: FETCH_DATA_FAIL, error };
};
export const setUserName = (userName) => {
  return { type: SET_USER_NAME, userName };
};
