export const createUser = (data) => {
  return this.$axios.post('/users', data);
};
