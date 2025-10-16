import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchCategory = createAsyncThunk(
  "/category/fetchCategory",
  async () => {
    const data = await fetch("http://localhost:3000/category");
    const res = await data.json();
    return res;
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default CategorySlice.reducer;
