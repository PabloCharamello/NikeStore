import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./app/Store.js";
import { Provider } from "react-redux";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
