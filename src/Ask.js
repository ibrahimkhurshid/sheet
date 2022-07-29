import React from "react";
import "./Ask.css";

const Ask = () => {
  return (
    <div className="ask-container">
      <div className="page-heading">Create a new Sheet</div>
      <div className="inputs-container">
        <div className="input-div">
          <label>Row</label>
          <input className="rc-input" type="text" placeholder="row..."></input>
        </div>
        <div className="input-div">
          <label>Col</label>
          <input className="rc-input" type="text" placeholder="col..."></input>
        </div>
        <button className="create-btn">Create</button>
      </div>
    </div>
  );
};

export default Ask;
