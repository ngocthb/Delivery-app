import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axios";

export const fetchCartThunk = createAsyncThunk(
  "cart/fetchCart",
  async (thunkAPI) => {
    try {
      const res = await api.get("cart");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateCartThunk = createAsyncThunk(
  "cart/addToCart",
  async (carts, thunkAPI) => {
    try {
      const res = await api.put("cart", carts);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
