import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../config/axios";

export const fetchRestaurantByIdThunk = createAsyncThunk(
  "restaurants/fetchRestaurantById",
  async (id, thunkAPI) => {
    try {
      const res = await api.get(`restaurants/${id}`);

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
