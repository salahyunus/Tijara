import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import App from "./App";
/* Browser Router for changing url (navigation)
 without using conditional rendering */
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap in a Router (BrowserRouter) component to tell the browser */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
