export const selectRestaurantId = (state) => {
  return state.restaurant.restaurant._id || null;
};
