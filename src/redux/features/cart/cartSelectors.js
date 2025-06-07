export const selectCart = (state) => state.cart.items;

export const selectCartItems = (state) => state.cart.items;

export const selectLoading = (state) => state.cart.loading;

export const selectError = (state) => state.cart.error;

export const selectTotalItems = (state) => {
  if (!Array.isArray(state.cart.items)) return 0;
  return state.cart.items.reduce((count, restaurantGroup) => {
    return count + restaurantGroup.dishes.reduce((sum, dish) => sum + dish.quantity, 0);
  }, 0);
};

export const selectCartTotalPrice = (state) => {
  let total = 0;
  const items = state.cart.items;
  if (!Array.isArray(items)) return 0;
  let i, j;
  for (i = 0; i < state.cart.items.length; i++) {
    for (j = 0; j < state.cart.items[i].dishes.length; j++) {
      total += state.cart.items[i].dishes[j].price * state.cart.items[i].dishes[j].quantity;
    }
  }

  return parseFloat(total.toFixed(2));
};

export const selectCartItemById = (state, dishId) => {
  const items = state.cart.items;
  if (!Array.isArray(items)) return null;
  let i, j;
  for (i = 0; i < state.cart.items.length; i++) {
    for (j = 0; j < state.cart.items[i].dishes.length; j++) {
      if (state.cart.items[i].dishes[j].dish_id === dishId) {
        return state.cart.items[i].dishes[j];
      }
    }
  }
};

export const selectRestaurantCartTotal = (state, restaurantId) => {
  let total = 0;
  const items = state.cart.items;
  if (!Array.isArray(items)) return 0;
  let i, j;
  for (i = 0; i < state.cart.items.length; i++) {
    if (state.cart.items[i].restaurant_id === restaurantId) {
      for (j = 0; j < state.cart.items[i].dishes.length; j++) {
        total += state.cart.items[i].dishes[j].price * state.cart.items[i].dishes[j].quantity;
      }
    }
  }

  return parseFloat(total.toFixed(2));
};

export const selectCartFlatList = (state) => {
  return {
    carts: state.cart.items.flatMap((restaurant) =>
      restaurant.dishes.map((dish) => ({
        dish_id: dish.dish_id,
        quality: dish.quantity,
      }))
    ),
  };
};

export const selectCartFlatListByRestaurant = (state, restaurantId) => {
  const restaurant = state.cart.items.find((item) => item.restaurant_id === restaurantId);
  if (!restaurant) return [];
  return restaurant.dishes.map((dish) => ({
    dish_id: dish.dish_id,
    quality: dish.quantity,
  }));
};
