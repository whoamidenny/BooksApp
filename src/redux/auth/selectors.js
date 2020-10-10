import {createSelector} from 'reselect';

const getAuthState = (state) => state.auth;
const getProfile = (state) => state.auth.userProfile;

export const selectStayLogged = createSelector(
  [getAuthState],
  (authState) => authState.stayLogged,
);

export const selectLoginStatus = createSelector(
  [getAuthState],
  (authState) => authState.stayLogged && authState.loggedIn,
);

export const selectAuthOrPreload = createSelector(
  [getAuthState],
  (authState) => authState.loggedIn && authState.stayLogged,
);

export const selectOnboardingComplete = createSelector(
  [getAuthState],
  (authState) => authState.isOnboardingComplete,
);

export const selectToken = createSelector(
  [getAuthState],
  (authState) => authState.user.token,
);

export const selectUsername = createSelector(
  [getProfile],
  (profile) => profile.name,
);

export const selectEmail = createSelector(
  [getProfile],
  (profile) => profile.email,
);

export const selectUserProfileData = createSelector(
  [getProfile],
  (profile) => profile,
);
