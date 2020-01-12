import { createSelector } from 'reselect';

export const getDashboardLoading = createSelector(
  (state) => state.dashboard.loading,
  (loading) => loading
);

export const getDashboardData = createSelector(
  (state) => state.dashboard.dashboardData,
  (dashboardData) => dashboardData
);

export const getDashboardBookStatus = createSelector(
  (state) => state.dashboard.booking,
  (booking) => booking
);
