import * as types from './types';

const DEF_STRUCTURE = {id: null, name: null};

const initState = {
  booksWrittenFor: DEF_STRUCTURE,
  protagonist: DEF_STRUCTURE,
  pointOfView: DEF_STRUCTURE,
  tense: DEF_STRUCTURE,
  violence: DEF_STRUCTURE,
  explicit: DEF_STRUCTURE,
  sexScenes: DEF_STRUCTURE,
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
