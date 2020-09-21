import {createSelector} from 'reselect';

const getAuthState = (state) => state.auth;
const getProfile = (state) => state.auth.userProfile;

export const selectStayLogged = createSelector(
  [getAuthState],
  (authState) => authState.stayLogged,
);

export const selectUsername = createSelector(
  [getProfile],
  (profile) => profile.name,
);

export const selectEmail = createSelector(
  [getProfile],
  (profile) => profile.email,
);
