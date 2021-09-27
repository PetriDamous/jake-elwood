import React from "react";
import { Link } from "gatsby";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <Link to="/" className="logo">
          Jake&Elwood
        </Link>
        <button id="open-nav" className="open-nav">
          &#9776;
        </button>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
