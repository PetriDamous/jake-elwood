import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="nav">
      <button id="close-nav" className="close-nav">
        &times;
      </button>
      <Link to="/" className="active">
        home
      </Link>
      <Link to="/about">about us</Link>
      <Link to="/contact">contact</Link>
    </nav>
  );
};

export default NavBar;
