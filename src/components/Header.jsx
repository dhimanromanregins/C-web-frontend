import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div
        className="header-area homepage1 header header-sticky d-none d-lg-block"
        id="header"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-elements">
                <div className="site-logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo1.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu">
                  <ul style={{margin: 0, padding: 0}}>
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="body-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
