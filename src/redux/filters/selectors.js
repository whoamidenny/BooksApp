import {createSelector} from 'reselect';

export const getFilterState = (state) => state.filters;

export const selectBooksWrittenFor = createSelector(
  [getFilterState],
  (filterState) => filterState.books_written_for,
);

export const selectProtagonist = createSelector(
  [getFilterState],
  (filterState) => filterState.protagonist,
);

export const selectPointOfView = createSelector(
  [getFilterState],
  (filterState) => filterState.view_point,
);

export const selectTense = createSelector(
  [getFilterState],
  (filterState) => filterState.tense,
);

export const selectViolence = createSelector(
  [getFilterState],
  (filterState) => filterState.has_violence,
);

export const selectExplicit = createSelector(
  [getFilterState],
  (filterState) => filterState.has_explicit_language,
);

export const selectSexScenes = createSelector(
  [getFilterState],
  (filterState) => filterState.has_sex_scene,
);

export const selectFilterGenres = createSelector(
  [getFilterState],
  (filterState) => filterState.genres,
);
