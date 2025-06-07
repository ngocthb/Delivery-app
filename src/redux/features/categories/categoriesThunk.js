import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axios";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("categories");
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
