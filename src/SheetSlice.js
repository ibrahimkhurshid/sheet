import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: {
    data: [],
  },
  reducers: {
    resetData: (state) => {
      state.data = [];
    },
  },
});

export const { resetData } = sheetSlice.actions;
export default sheetSlice.reducer;
