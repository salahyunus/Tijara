/*  ----------------------- ﷽  ------------------------ */

import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import App from "./App";
/* Browser Router for changing url (navigation)
 without using conditional rendering */
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./context/GlobalState";

// import { store } from "./store";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap in a Router (BrowserRouter) component to tell the browser */}
    {/* <Provider store={store}> if using redux but i used Context API */}
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
