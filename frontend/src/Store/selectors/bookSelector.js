import { createSelector } from 'reselect';

export const getBookLoadingStatus = createSelector(
  (state) => state.book.loading,
  (loading) => loading
);

export const getAllBookData = createSelector(
  (state) => state.book.bookData,
  (bookData) => bookData
);

export const getSearchBookName = createSelector(
  (state) => state.book.bookName,
  (bookName) => bookName
);

export const getSearchedByBookName = createSelector(
  [getAllBookData, getSearchBookName],
  (books, name) =>
    books.filter((book) =>
      book.book_name.toLowerCase().includes(name.toLowerCase())
    )
);
export const getBookSearchResults = createSelector(
  [getSearchBookName, getSearchedByBookName],
  (name, searchResultsByBookName) => {
    if (name !== '') {
      return searchResultsByBookName;
    }
    return searchResultsByBookName;
  }
);
