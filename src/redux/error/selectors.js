import {createSelector} from 'reselect';
import State from '..';

const getErrorState = (state) => state.error;

export const selectLoading = () =>
  createSelector([getErrorState], (errorState) => errorState.loading);
