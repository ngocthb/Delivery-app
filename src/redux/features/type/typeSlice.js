import { createSlice } from "@reduxjs/toolkit";
import { fetchTypesThunk } from "./typeThunk";

const typeSlice = createSlice({
  name: "types",
  initialState: {
    types: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTypesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.types = action.payload;
      })
      .addCase(fetchTypesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default typeSlice.reducer;
