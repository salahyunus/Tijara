/*  ----------------------- ﷽  ------------------------ */

import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../resources/images/logos/LL_CR.png";
import darklogo from "../resources/images/logos/LD_CR.png";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase.js";

function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const register = (e) => {
    // e.preventDefault();
    // createUserWithEmailAndPassword(auth);
    console.log("works");
  };

  // logo useState & hover effects
  const [logoSrc, setLogoSrc] = useState(darklogo);
  //       read       write             initial value

  const handleMouseOver = () => {
    setLogoSrc(logo);
  };
  const handleMouseOut = () => {
    setLogoSrc(darklogo);
  };
  return (
    <LoginPage>
      <div className="login-wrapper">
        <div className="login-head-logo">
          <Link to="/">
            <img
              src={logoSrc}
              alt="LOGO"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </Link>
        </div>
        <form action="" className="login-form">
          <h1>Welcome Back!</h1>
          <div className="login-input-box">
            <input
              type="email"
              //   value={email}
              name="Email"
              id="email"
              placeholder="Email..."
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="login-icon" />
          </div>
          <div className="login-input-box">
            <input
              type="password"
              //   value={password}
              name="password"
              id="password"
              placeholder="Password..."
              required
            />
            <FontAwesomeIcon icon={faLock} className="login-icon" />
          </div>
          <div className="agree-terms">
            <label>
              <Checkbox
                defaultChecked
                sx={{
                  color: red[800],
                  "&.Mui-checked": {
                    color: red[600],
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 30,
                  },
                }}
              />
              Agree to Tijarah's{" "}
              <Link to="/terms">
                <span className="underhover">Terms & Conditions</span>
              </Link>
            </label>
          </div>
          <button type="submit" className="login-btn-form" onClick={register}>
            Login
          </button>
          <div className="register-redirect">
            <p>
              Don't have an account yet?{" "}
              <Link to="/signup">
                <span className="underhover">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </LoginPage>
  );
}
const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  justify-content: center;
  text-align: center;
`;
export default Login;
