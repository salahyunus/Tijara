import { Link } from "react-router-dom";
import React, { useState } from "react";

import logo from "../resources/images/logos/LL_CR.png";
import darklogo from "../resources/images/logos/LD_CR.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Header() {
  const [logoSrc, setLogoSrc] = useState(logo);
  const handleMouseOver = () => {
    setLogoSrc(darklogo);
  };
  const handleMouseOut = () => {
    setLogoSrc(logo);
  };
  return (
    <Nav>
      <Link to="/">
        <Logo>
          <img
            src={logoSrc}
            alt="LOGO"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Logo>
      </Link>
      <NavMenu>
        <div className="search-h">
          <input
            type="search"
            className="header-search"
            placeholder="Search Products..."
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <a href="/home">
          <span className="returns-header">Orders</span>
        </a>
        <a href="/home">
          <span className="returns-header">Projects</span>
        </a>
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart-header" />
        </div>
        <span className="count">1</span>
      </NavMenu>
      <Login>
        <FontAwesomeIcon icon={faPerson} className="cart-header" />
        {"    "}Login
      </Login>
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  user-select: none;
`;
const Logo = styled.a`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  padding: 0;
  width: 60px;
  margin-top: 4px;
  max-height: 75px;
  font-size: 0;
  display: inline-block;
  user-select: none;
  img {
    display: block;
    width: 100%;
    cursor: pointer;
    user-select: none;
  }
`;
const NavMenu = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  user-select: none;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 24px;
      width: 24px;
      min-width: 20px;
      margin-right: 1.5px;
      &:hover {
        content: url(darklogo);
      }
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 20px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        height: 2px;
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        opacity: 0;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 630px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: transparent;
  padding: 12px 35px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
