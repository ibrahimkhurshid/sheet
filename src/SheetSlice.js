import { createSlice } from "@reduxjs/toolkit";

export const sheetSlice = createSlice({
  name: "sheet",
  initialState: {
    data: [],
    localStorage,
  },
  reducers: {
    resetData: (state) => {
      const tmp = [];
      state.data = tmp;
      localStorage.setItem("sheet", tmp);
    },
    setData: (state) => {
      const tmp = [
        [1, 2],
        [3, 4],
      ];
      state.data = tmp;
      state.data = localStorage.setItem("sheet", tmp);
    },
  },
});

export const { resetData, setData } = sheetSlice.actions;
export default sheetSlice.reducer;
