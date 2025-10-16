import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
