import {createSelector} from 'reselect';

export const getCatalogsState = (state) => state.catalog;

export const selectCategories = createSelector(
  [getCatalogsState],
  (catalogState) => catalogState.categories,
);

export const selectGenres = createSelector(
  [getCatalogsState],
  (catalogState) => catalogState.genres,
);

export const selectBooks = createSelector(
  [getCatalogsState],
  (catalogState) => catalogState.books,
);

export const selectCurrentBookData = createSelector(
  [getCatalogsState],
  (catalogState) => catalogState.currentBookData,
);
