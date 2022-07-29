import { createSlice } from "@reduxjs/toolkit";

const genArr = (r, c, fill) => {
  const temp = [];
  for (let i = 0; i < r; i++) {
    temp[i] = [];
    for (let j = 0; j < c; j++) {
      temp[i][j] = fill;
    }
  }
  return temp;
};
export const sheetSlice = createSlice({
  name: "sheet",
  initialState: {
    data: [],
  },
  reducers: {
    newData: (state, e) => {
      const obj = e.payload;
      const tmp = genArr(obj.row, obj.col, obj.fill);
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
    initData: (state) => {
      if (localStorage.getItem("sheet") !== null) {
        let tmp = JSON.parse(localStorage.getItem("sheet"));
        state.data = tmp;
      } else {
        let tmp = [];
        localStorage.setItem("sheet", JSON.stringify(tmp));
        state.data = tmp;
      }
    },
    resetData: (state) => {
      let tmp = [];
      state.data = tmp;
      localStorage.setItem("sheet", tmp);
    },
    setData: (state, e) => {
      let tmp = [...state.data];
      const obj = e.payload;
      tmp[obj.row][obj.col] = obj.val;
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
    removeRow: (state, e) => {
      const tmp = [...state.data];
      tmp.splice(e.payload.row, 1);
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
    removeCol: (state, e) => {
      const tmp = [...state.data];
      // for (let r =0;r<)
      tmp.splice(e.payload.col, 1);
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
  },
});

export const { initData, resetData, setData, newData, removeRow, removeCol } =
  sheetSlice.actions;
export default sheetSlice.reducer;
