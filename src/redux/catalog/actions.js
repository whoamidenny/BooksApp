import * as types from './types';
import API from '../../api';
import {errorActions} from '../error';

export const setCatalogValue = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});

export const getCategories = () => (dispatch) => {
  dispatch(setCatalogValue('loading', true));

  API.get('/api/categories')
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        dispatch(setCatalogValue('categories', response.data));
      }
    })
    .catch((error) => {
      dispatch(setCatalogValue('loading', false));
      dispatch(errorActions.setMessage('error', error.response.data));
    });
};
