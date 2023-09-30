import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import modeReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={modeReducer}>
      <App />
    </Provider>
  </React.StrictMode>
);
