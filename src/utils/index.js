export const decodeErrorResponse = (error) => {
  return error.response.data.error;
};

export const decodeErrorMessage = (error) => {
  return error.response.data.message;
};

export const decodeSuccessMessage = (response) => {
  return response.data.message;
};

export const isExistInArray = (list, element) => {
  const isExist = list.find((item) => item.id === element.id);

  return isExist === undefined ? false : true;
};

export const getFormatedList = (list, element, isExist) => {
  return isExist
    ? list.filter((item) => item.id !== element.id)
    : [...list, element];
};
