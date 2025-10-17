import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchPopular = createAsyncThunk(
  "/popular/fetchPopular",
  async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/seyedmehdii/myData/main/db.json"
    );
    const res = await data.json();
    return res.popular;
  }
);

const PopularSlice = createSlice({
  name: "popular",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchPopular.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default PopularSlice.reducer;
