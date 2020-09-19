export const isUserDataValid = (data) => {
  return !(data.name && data.email && data.password);
};
