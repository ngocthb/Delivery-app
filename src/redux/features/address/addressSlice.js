import { createSlice } from '@reduxjs/toolkit';
import { fetchAddressThunk } from './addressThunk';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    address: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearAddress: (state) => {
      state.address = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddressThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
      })
      .addCase(fetchAddressThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default addressSlice.reducer;
