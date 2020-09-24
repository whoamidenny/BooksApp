import * as types from './types';

const DEF_STRUCTURE = {id: null, name: null};
const DEF_ARRAY = [];

const initState = {
  books_written_for: DEF_STRUCTURE,
  protagonist: DEF_STRUCTURE,
  view_point: DEF_STRUCTURE,
  tense: DEF_STRUCTURE,
  has_violence: DEF_STRUCTURE,
  has_explicit_language: DEF_STRUCTURE,
  has_sex_scene: DEF_STRUCTURE,
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
