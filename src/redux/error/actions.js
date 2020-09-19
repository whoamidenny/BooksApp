import * as types from './types';

export const changeFieldInStore = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});

const sendMessage = (typeMessage, message, active) => ({
  type: types.SET_MESSAGE,
  typeMessage,
  message,
  active,
});

export const setMessage = (typeMessage, message, active = true) => (
  dispatch,
) => {
  dispatch(sendMessage(typeMessage, message, active));

  setTimeout(() => {
    dispatch(sendMessage(typeMessage, message, false));
  }, 5000);
};
