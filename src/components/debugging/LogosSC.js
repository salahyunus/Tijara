import React from "react";
import logos from "./logos";

const LogosSC = () => {
  return (
    <div>
      {logos.map((logo) => (
        <img
          key={logo.name}
          className="logo"
          src={logo.light}
          alt={logo.name}
        />
      ))}
    </div>
  );
};

export default LogosSC;
