/*  ----------------------- ﷽  ------------------------ */

// Navigation
import { Link } from "react-router-dom";
// useState hook for rendering logo dynamically and some hover effects
import React, { useState } from "react";
// Initial logo (red theme - dark mode)
import logo from "../resources/images/logos/LL_CR.png";
import darklogo from "../resources/images/logos/LD_CR.png";
// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

//  import { useSelector } from "react-redux";
// const CartContainer = () => {
//   const { cartItems, total, amount } = useSelector((state) => state.cart);
// }

// Styled Components
import styled from "styled-components";

function Header() {
  // logo useState & hover effects
  const [logoSrc, setLogoSrc] = useState(logo);
  //       read       write             initial value

  const handleMouseOver = () => {
    setLogoSrc(darklogo);
  };
  const handleMouseOut = () => {
    setLogoSrc(logo);
  };

  return (
    <Nav>
      <Link to="/">
        <div className="header-logo">
          <img
            src={logoSrc}
            alt="LOGO"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
      </Link>
      <div className="nav-menu">
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search Products..."
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <Link to="/orders">
          <span className="orders-header underhover navhover">Orders</span>
        </Link>
        <Link to="*">
          <span className="returns-header underhover navhover">Tech</span>
        </Link>
        <Link to="checkout">
          <div className="cart-container">
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          </div>
          <p className="cart-quantity">1</p>
        </Link>
      </div>
      <Link to="/login">
        {/* here's how to implement inline styling */}
        <div className="login-btn" style={{ paddingTop: "12px" }}>
          <FontAwesomeIcon icon={faPerson} className="cart-header" />
          {"    "}Login
        </div>
      </Link>
    </Nav>
  );
}
/* I Don't recommend using styled-com. but I only used 
it here in the Nav to show u how */

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

export default Header;
