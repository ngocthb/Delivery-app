import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axios";

export const fetchTypesThunk = createAsyncThunk(
  "types/fetchTypes",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("types");
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
