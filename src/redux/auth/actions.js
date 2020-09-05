import * as types from './types';
import API, {setToken, deleteToken} from '../../api';
import {errorActions} from '../error';

export const setAuthValue = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});
