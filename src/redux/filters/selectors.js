import {createSelector} from 'reselect';

export const getFilterState = (state) => state.filters;

export const selectBooksWritten = createSelector(
  [getFilterState],
  (filterState) => filterState.booksWritten,
);

export const selectProtagonist = createSelector(
  [getFilterState],
  (filterState) => filterState.protagonist,
);
