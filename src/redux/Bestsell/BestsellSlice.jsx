import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchBestsell = createAsyncThunk(
  "/Bestsell/fetchBestsell",
  async () => {
    const data = await fetch("http://localhost:3000/now");
    const res = await data.json();
    return res;
  }
);

const BestsellSlice = createSlice({
  name: "Bestsell",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestsell.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchBestsell.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBestsell.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default BestsellSlice.reducer;
