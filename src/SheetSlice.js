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
        const tmp = JSON.parse(localStorage.getItem("sheet"));
        state.data = tmp;
      } else {
        const tmp = [];
        localStorage.setItem("sheet", JSON.stringify(tmp));
        state.data = tmp;
      }
    },
    deleteData: (state) => {
      const tmp = [];
      state.data = tmp;
      console.log("After", state.data);
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
    setData: (state, e) => {
      const tmp = [...state.data];
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
      for (let r = 0; r < tmp.length; r++) {
        tmp[r].splice(e.payload.col, 1);
      }
      // if a row has no columns left, delete that row
      if (tmp[0][0] === undefined) {
        tmp.splice(0, tmp.length);
      }
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
    resetData: (state) => {
      const obj = {
        row: state.data.length,
        col: state.data[0].length,
        fill: "",
      };
      const tmp = genArr(obj.row, obj.col, obj.fill);
      state.data = tmp;
      localStorage.setItem("sheet", JSON.stringify(tmp));
    },
  },
});

export const {
  initData,
  resetData,
  deleteData,
  setData,
  newData,
  removeRow,
  removeCol,
} = sheetSlice.actions;
export default sheetSlice.reducer;
