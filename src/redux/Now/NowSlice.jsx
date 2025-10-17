import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchNow = createAsyncThunk("/now/fetchNow", async () => {
  const data = await fetch(
    "https://my-json-server.typicode.com/seyedmehdii/myData/now"
  );
  const res = await data.json();
  return res;
});

const NowSlice = createSlice({
  name: "now",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNow.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchNow.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNow.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default NowSlice.reducer;
