import { createSelector } from 'reselect';

export const getUserLoadingStatus = createSelector(
  (state) => state.user.loading,
  (loading) => loading
);

export const getAllUserData = createSelector(
  (state) => state.user.userData,
  (userData) => userData
);

export const getSearchUserName = createSelector(
  (state) => state.user.userName,
  (userName) => userName
);

export const getSearchedByUserName = createSelector(
  [getAllUserData, getSearchUserName],
  (users, name) =>
    users.filter((user) =>
      user.user_full_name.toLowerCase().includes(name.toLowerCase())
    )
);
export const getUserSearchResults = createSelector(
  [getSearchUserName, getSearchedByUserName],
  (name, searchResultsByUserName) => {
    if (name !== '') {
      return searchResultsByUserName;
    }
    return searchResultsByUserName;
  }
);
