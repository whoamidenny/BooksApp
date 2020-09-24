import * as types from './types';

const initState = {
  categories: [],
  genres: [],
  books: [],
  currentBookData: null,
};

const catalogReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_FIELD_IN_STORE: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
};

export default catalogReducer;
