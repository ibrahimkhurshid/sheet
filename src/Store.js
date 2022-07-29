import { configureStore } from "@reduxjs/toolkit";
import sheetSlice from "./SheetSlice";
export const store = configureStore({
  reducer: { sheet: sheetSlice },
});
