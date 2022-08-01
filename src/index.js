import React from "react";
import { createRoot } from "react-dom/client";
import Sheet from "./Sheet";
import { Provider } from "react-redux";
import { store } from "./Store";
import "./footer.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="sheet-container">
    <Provider store={store}>
      <Sheet />
    </Provider>
  </div>
);
