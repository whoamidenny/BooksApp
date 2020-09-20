import {createSelector} from 'reselect';

const getErrorState = (state) => state.error;

export const selectLoading = createSelector(
  [getErrorState],
  (errorState) => errorState.loading,
);
