import * as types from './types';
import API from '../../api';
import {errorActions} from '../error';
import {decodeErrorResponse} from '../../utils';

export const setCatalogValue = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});

export const getGenres = () => (dispatch) => {
  API.get('/api/genres')
    .then((response) => {
      dispatch(setCatalogValue('genres', response.data));
    })
    .catch((error) => {
      dispatch(errorActions.setMessage('error', decodeErrorResponse(error)));
    });
};

export const getCategories = () => (dispatch) => {
  API.get('/api/categories')
    .then((response) => {
      dispatch(setCatalogValue('categories', response.data));
    })
    .catch((error) => {
      dispatch(errorActions.setMessage('error', decodeErrorResponse(error)));
    });
};

export const getBooks = () => (dispatch) => {
  API.get('/api/books')
    .then((response) => {
      dispatch(setCatalogValue('books', response.data));
    })
    .catch((error) => {
      dispatch(errorActions.setMessage('error', decodeErrorResponse(error)));
    });
};
