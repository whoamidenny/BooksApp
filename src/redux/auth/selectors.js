import {createSelector} from 'reselect';

const getAuthState = (state) => state.auth;

export const selectStayLogged = createSelector(
  [getAuthState],
  (authState) => authState.stayLogged,
);
