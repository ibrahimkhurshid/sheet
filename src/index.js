import React from "react";
import { createRoot } from "react-dom/client";
import Sheet from "./Sheet";
import { Provider } from "react";
import { store } from "./Store";

const root = createRoot(document.getElementById("root"));

root.render(<Sheet />);
