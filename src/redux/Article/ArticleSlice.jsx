import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchArticle = createAsyncThunk(
  "/article/fetchArticle",
  async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/seyedmehdii/myData/article"
    );
    const res = await data.json();
    return res;
  }
);

const ArticleSlice = createSlice({
  name: "article",
  initialState: { posts: [], loading: true, error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default ArticleSlice.reducer;
