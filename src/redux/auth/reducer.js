import * as types from './types';

const initState = {
  user: {
    token: null,
  },
  isOnboardingComplete: false,
  stayLogged: false,
  loggedIn: false,
  userProfile: {
    name: '',
    email: '',
  },
};

const authReducer = (state = initState, action) => {
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

export default authReducer;
