import * as types from './types';

const DEF_STRUCTURE = {id: null, name: null};
const DEF_ARRAY = [];

const initState = {
  booksWritten: DEF_STRUCTURE,
  protagonist: DEF_STRUCTURE,
  pointOfView: DEF_STRUCTURE,
  genres: DEF_ARRAY,
};

const filtersReducer = (state = initState, action) => {
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

export default filtersReducer;
