import React from "react";
import "./footer.css";
import { useDispatch } from "react-redux";
import { deleteData, resetData } from "./SheetSlice";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <button className="save-btn" onClick={() => console.log("saving...")}>
        Save
      </button>
      <button
        className="save-btn"
        onClick={() =>
          window.confirm("Delete this Sheet?") ? dispatch(deleteData()) : null
        }
      >
        Delete
      </button>
      <button
        className="save-btn"
        onClick={() =>
          window.confirm("Reset this Sheet?") ? dispatch(resetData()) : null
        }
      >
        Reset
      </button>
      <span>
        Warn
        <label>Empty</label>
        <input type="checkbox"></input>
        <label>Duplicates in row|col</label>
        <input type="checkbox"></input>
        <label>Non-Distinct</label>
        <input type="checkbox"></input>
      </span>
    </div>
  );
};

export default Footer;
