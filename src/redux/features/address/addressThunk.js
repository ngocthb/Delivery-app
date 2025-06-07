import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../config/axios';

export const fetchAddressThunk = createAsyncThunk('address/fetchAddress', async (q, thunkAPI) => {
  try {
    const res = await api.get('address', {
      params: { q },
    });
    return res.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const updateAddressThunk = createAsyncThunk('address/updateAddress');
