export const FETCH_BOOK_DATA = 'lms/book/FETCH_BOOK_DATA';
export const FETCH_BOOK_DATA_SUCCESS = 'lms/book/FETCH_BOOK_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'lms/book/FETCH_DATA_FAIL';
export const SET_BOOK_NAME = 'lms/book/SET_BOOK_NAME';
export const DELETE_BOOK = 'lms/user/DELETE_BOOK';

const initialState = {
  loading: false,
  bookData: [],
  bookName: ''
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_DATA:
      return { ...state, loading: true };
    case FETCH_BOOK_DATA_SUCCESS:
      return { ...state, bookData: action.bookData, loading: false };
    case FETCH_DATA_FAIL:
      return { ...state, loading: false };
    case SET_BOOK_NAME:
      return { ...state, bookName: action.bookName };

    default:
      return state;
  }
};
export default bookReducer;

export const fetchBookData = () => {
  return { type: FETCH_BOOK_DATA };
};
export const fetchBookDataSuccess = (bookData) => {
  return { type: FETCH_BOOK_DATA_SUCCESS, bookData };
};
export const fetchDataFail = (error) => {
  return { type: FETCH_DATA_FAIL, error };
};
export const setBookName = (bookName) => {
  return { type: SET_BOOK_NAME, bookName };
};
export const deleteBook = (bookId) => {
  return { type: DELETE_BOOK, bookId };
};
