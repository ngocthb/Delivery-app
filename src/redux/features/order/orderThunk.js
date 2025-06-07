import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axios";

export const fetchOrdersThunk = createAsyncThunk(
  "orders/fetchOrders",
  async (carts, thunkAPI) => {
    try {
      const res = await api.post("orders", {
        carts,
        address: "123 street, City, Country",
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
