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

      console.log("newData", tmp);
      console.log("newData", obj.row);
      console.log("newData", obj.col);

      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
    initData: (state) => {
      if (localStorage.getItem("sheet") !== null) {
        let tmp = JSON.parse(localStorage.getItem("sheet"));
        state.data = tmp;
        console.log("initData", tmp);
      } else {
        let tmp = [];
        localStorage.setItem("sheet", JSON.stringify(tmp));
        state.data = tmp;
        console.log("initData", tmp);
      }
    },
    resetData: (state) => {
      let tmp = [];
      state.data = tmp;
      localStorage.setItem("sheet", tmp);
      console.log("resetData", tmp);
    },
    setData: (state, e) => {
      let tmp = [...state.data];
      const obj = e.payload;
      tmp[obj.row][obj.col] = obj.val;
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
      console.log("setData", tmp);
    },
  },
});

export const { initData, resetData, setData, newData } = sheetSlice.actions;
export default sheetSlice.reducer;
