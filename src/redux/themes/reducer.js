import * as types from './types';
import light from './mode/light';

const initState = {
  ...light,
  dark: 1,
  blue: 2,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME: {
      return {
        ...action.theme,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
