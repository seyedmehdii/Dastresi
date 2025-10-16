import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTakhfif = createAsyncThunk("/takhfif/fetchTakhfif", async () => {
  const data = await fetch("http://localhost:3000/takhfif");
  const res = await data.json();
  return res;
});

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
