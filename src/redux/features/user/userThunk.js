import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../config/axios';

export const fetchLoginThunk = createAsyncThunk(
  'user/fetchLogin',
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post('auth/login', credentials);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchRegisterThunk = createAsyncThunk(
  'user/fetchRegister',
  async (userData, thunkAPI) => {
    try {
      const res = await api.post('auth/register', userData);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUserThunk = createAsyncThunk('user/fetchUser', async (id, thunkAPI) => {
  try {
    const res = await api.get(`users/${id}`);
    return res.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
