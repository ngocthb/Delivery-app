const { createSlice } = require('@reduxjs/toolkit');
import { fetchCartThunk, updateCartThunk } from './cartThunks';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalItems: 0,
    loading: false,
    error: null,
  },
  reducers: {
    increaseQuality: (state, action) => {
      const { id, name, price, image, res } = action.payload;
      const { restaurant_id, restaurant_name, restaurant_image } = res;

      const existingRestaurant = state.items.find((r) => r.restaurant_id === restaurant_id);

      if (existingRestaurant) {
        const existingDish = existingRestaurant.dishes.find((d) => d.dish_id === id);

        if (existingDish) {
          existingDish.quantity += 1;
        } else {
          existingRestaurant.dishes.push({
            dish_id: id,
            name,
            price,
            image,
            quantity: 1,
          });
        }
      } else {
        state.items.push({
          restaurant_id,
          restaurant_name,
          restaurant_image,
          dishes: [
            {
              dish_id: id,
              name,
              price,
              image,
              quantity: 1,
            },
          ],
        });
      }
      state.totalAmount += price;
      state.totalItems += 1;
    },

    decreaseQuality: (state, action) => {
      const { id, res } = action.payload;
      const { restaurant_id } = res;
      const restaurant = state.items.find((r) => r.restaurant_id === restaurant_id);

      if (!restaurant) return;

      const dishIndex = restaurant.dishes.findIndex((d) => d.dish_id === id);

      if (dishIndex === -1) return;

      const dish = restaurant.dishes[dishIndex];

      if (dish.quantity > 1) {
        dish.quantity -= 1;
        state.totalAmount -= dish.price;
        state.totalItems -= 1;
      } else {
        restaurant.dishes.splice(dishIndex, 1);
        state.totalAmount -= dish.price;
        state.totalItems -= 1;
      }

      if (restaurant.dishes.length === 0) {
        const restaurantIndex = state.items.findIndex((r) => r.restaurant_id === restaurant_id);
        state.items.splice(restaurantIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartThunk.fulfilled, (state, action) => {
        state.loading = false;
        const items = action.payload?.data;

        if (Array.isArray(items)) {
          state.items = items;
        } else {
          state.items = [];
        }
      })
      .addCase(fetchCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartThunk.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { increaseQuality, decreaseQuality } = cartSlice.actions;
export default cartSlice.reducer;
