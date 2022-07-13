export const getPickupPhrases = () => {
  return this.$axios.get('/pickup-phrases');
};
