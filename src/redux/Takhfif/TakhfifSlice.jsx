import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTakhfif = createAsyncThunk(
  "/takhfif/fetchTakhfif",
  async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/seyedmehdii/myData/main/db.json"
    );
    const res = await data.json();
    return res.takhfif;
  }
);

const TakhfifSlice = createSlice({
  name: "takhfif",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTakhfif.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchTakhfif.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTakhfif.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default TakhfifSlice.reducer;
