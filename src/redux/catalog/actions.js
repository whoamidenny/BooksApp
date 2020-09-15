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
        dispatch(setCatalogValue('loading', false));
      }
    })
    .catch((error) => {
      dispatch(setCatalogValue('loading', false));
      dispatch(errorActions.setMessage('error', error.response.data));
    });
};

export const getGenres = () => (dispatch) => {
  dispatch(setCatalogValue('loading', true));

  API.get('/api/genres')
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        dispatch(setCatalogValue('genres', response.data));
        dispatch(setCatalogValue('loading', false));
      }
    })
    .catch((error) => {
      dispatch(setCatalogValue('loading', false));
      dispatch(errorActions.setMessage('error', error.response.data));
    });
};
export const getAuthors = () => (dispatch) => {
  dispatch(setCatalogValue('loading', true));

  API.get('/api/authors')
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        dispatch(setCatalogValue('authors', response.data));
        dispatch(setCatalogValue('loading', false));
      }
    })
    .catch((error) => {
      dispatch(setCatalogValue('loading', false));
      dispatch(errorActions.setMessage('error', error.response.data));
    });
};
export const getBooks = () => (dispatch) => {
  dispatch(setCatalogValue('loading', true));

  API.get('/api/books')
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        dispatch(setCatalogValue('books', response.data));
        dispatch(setCatalogValue('loading', false));
      }
    })
    .catch((error) => {
      dispatch(setCatalogValue('loading', false));
      dispatch(errorActions.setMessage('error', error.response.data));
    });
};
