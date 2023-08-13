/*  ----------------------- ﷽  ------------------------ */

import React from "react";
import "./stylesheets/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Notfound from "./components/Error";
import Login from "./components/Login";

// Working with basic methods for mapping, destructing, objects, props:
// import LogosSC from "./components/debugging/LogosSC";

const App = () => {
  // We use () in return just in case (formatting)
  return (
    // I used a fragment can also use ReactFragement or any other element
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* Redirecting to wrong pages (404) */}
        <Route path="*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
