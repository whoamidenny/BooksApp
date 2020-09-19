import * as types from './types';
import API, {setToken, deleteToken} from '../../api';
import {errorActions} from '../error';
import {decodeErrorResponse, decodeSuccessMessage} from '../../utils';

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
      dispatch(
        errorActions.setMessage('success', decodeSuccessMessage(response)),
      );
    })
    .catch((error) => {
      dispatch(errorActions.changeFieldInStore('loading', false));
      dispatch(errorActions.setMessage('error', decodeErrorResponse(error)));
    });
};

export const onSignIn = (data) => (dispatch) => {
  API.post('');
};

export const onLogout = () => (dispatch) => {};
