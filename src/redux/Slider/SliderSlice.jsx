import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchSlider = createAsyncThunk("/slider/fetchSlider", async () => {
  const data = await fetch("http://localhost:3000/slider");
  const res = await data.json();
  return res;
});

const SliderSlice = createSlice({
  name: "slider",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default SliderSlice.reducer;
