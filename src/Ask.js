import React, { useRef } from "react";
import "./Ask.css";
import { useDispatch } from "react-redux";
import { newData } from "./SheetSlice";

const Ask = () => {
  const row = useRef();
  const col = useRef();
  const dispatch = useDispatch();
  return (
    <div className="ask-container">
      <div className="child">
        <div className="page-heading">Create a new Sheet</div>
        <div className="inputs">
          <div className="input">
            <input
              className="text-input"
              onChange={(e) => (row.current = e.target.value)}
              type="number"
              placeholder="25..."
            ></input>
            <p className="label">Rows</p>
          </div>
          <div className="input">
            <input
              onChange={(e) => (col.current = e.target.value)}
              className="text-input"
              type="number"
              placeholder="15..."
            ></input>
            <p className="label">Columns</p>
          </div>
          <button
            className="create-btn"
            onClick={() => {
              dispatch(
                newData({ row: row.current, col: col.current, fill: "" })
              );
            }}
          >
            Create Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ask;
