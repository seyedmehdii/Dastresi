import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMenu = createAsyncThunk("/menu/fetchMenu", async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/seyedmehdii/myData/main/db.json"
  );
  const res = await data.json();
  return res.menu;
});

const MenuSlice = createSlice({
  name: "menu",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default MenuSlice.reducer;
