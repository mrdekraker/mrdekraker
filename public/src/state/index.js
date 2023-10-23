import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: "mode",
  initialState: "light",
  reducers: {
    setMode: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;