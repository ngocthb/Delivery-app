import { createSlice } from "@reduxjs/toolkit";

import { fetchRestaurantByIdThunk } from "./restaurantsThunk";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurant: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload;
      })
      .addCase(fetchRestaurantByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantsSlice.reducer;
