import React from "react";
import "./stylesheets/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Notfound from "./components/Notfound";

const App = () => {
  // We use () in return just in case (formatting)
  return (
    // I used a fragment can also use ReactFragement or any other element
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* Redirecting to wrong pages (404) */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
