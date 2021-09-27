import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__info flow-content">
            <Link className="logo" to="/">
              Jake&Elwood
            </Link>
            <p>
              Two brothers from Chicago that are just trying to pay back their
              debt by helping others with their SEO, SEM, and Content Marketing
              needs.
            </p>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/">
              <img src="img/facebook.svg" alt="" />
            </a>
            <a href="https://twitter.com/?lang=en">
              <img src="img/twitter.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="img/instagram.svg" alt="" />
            </a>
          </div>
        </div>

        <p className="copywrite m-md-space">© Jack&Elwood 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
