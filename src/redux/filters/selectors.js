import {createSelector} from 'reselect';

export const getFilterState = (state) => state.filters;

export const selectBooksWrittenFor = createSelector(
  [getFilterState],
  (filterState) => filterState.booksWrittenFor,
);

export const selectProtagonist = createSelector(
  [getFilterState],
  (filterState) => filterState.protagonist,
);

export const selectPointOfView = createSelector(
  [getFilterState],
  (filterState) => filterState.pointOfView,
);

export const selectTense = createSelector(
  [getFilterState],
  (filterState) => filterState.tense,
);

export const selectViolence = createSelector(
  [getFilterState],
  (filterState) => filterState.violence,
);

export const selectExplicit = createSelector(
  [getFilterState],
  (filterState) => filterState.explicit,
);

export const selectSexScenes = createSelector(
  [getFilterState],
  (filterState) => filterState.sexScenes,
);

export const selectFilterGenres = createSelector(
  [getFilterState],
  (filterState) => filterState.genres,
);
