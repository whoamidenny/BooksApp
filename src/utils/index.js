export const decodeErrorResponse = (error) => {
  return error.response.data.error;
};

export const decodeErrorMessage = (error) => {
  return error.response.data.message;
};

export const decodeSuccessMessage = (response) => {
  return response.data.message;
};
