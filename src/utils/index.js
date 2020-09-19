export const decodeErrorResponse = (error) => {
  return error.response.data.error;
};

export const decodeSuccessMessage = (response) => {
  return response.data.message;
};
