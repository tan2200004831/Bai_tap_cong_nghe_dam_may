import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // Import component App chính
import "bootstrap/dist/css/bootstrap.min.css";

//Render component App vào thẻ div có id="root" trong file index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
