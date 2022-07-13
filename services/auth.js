export const getCurrentUser = () => {
  return this.$axios.get('/users/me');
};
