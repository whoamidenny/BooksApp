import * as types from './types';
import API, {setToken, deleteToken} from '../../api';
import {errorActions} from '../error';
import {
  decodeErrorMessage,
  decodeErrorResponse,
  decodeSuccessMessage,
} from '../../utils';

export const setAuthValue = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});

export const onSignUp = (data) => (dispatch) => {
  dispatch(errorActions.changeFieldInStore('loading', true));

  API.post('/api/readers/registration', data)
    .then((response) => {
      dispatch(setAuthValue('user', response.data));
      dispatch(errorActions.changeFieldInStore('loading', false));
      return response;
    })
    .then((response) => {
      dispatch(
        errorActions.setMessage('success', decodeSuccessMessage(response)),
      );

      data.onSuccess();
    })
    .catch((error) => {
      dispatch(errorActions.changeFieldInStore('loading', false));
      dispatch(errorActions.setMessage('error', decodeErrorResponse(error)));
    });
};

export const onSignIn = (data) => (dispatch) => {
  dispatch(errorActions.changeFieldInStore('loading', true));

  API.post('/authentication_token', data)
    .then((response) => {
      dispatch(setAuthValue('user', {...response.data, email: data.email}));
      dispatch(setAuthValue('loggedIn', true));
      setToken(response.data.token);
    })
    .then(() => {
      dispatch(errorActions.changeFieldInStore('loading', false));

      data.onSuccess();
    })
    .catch((error) => {
      dispatch(errorActions.changeFieldInStore('loading', false));
      dispatch(errorActions.setMessage('error', decodeErrorMessage(error)));
    });
};

export const onLogout = () => (dispatch) => {};

export const getUserProfile = () => (dispatch, getState) => {
  API.get('/api/readers/account')
    .then((response) => {
      console.log('getUserProfile', response);
      dispatch(setAuthValue('userProfile', response.data));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(errorActions.setMessage('error', decodeErrorMessage(error)));
    });
};

export const setCompletePreload = () => (dispatch) => {
  dispatch(setAuthValue('isOnboardingComplete', true));
};
