import { Link } from "react-router-dom";

const MobileSidebar = () => {
  return (
    <div className="mobile-sidebar mobile-sidebar1">
      <div className="logosicon-area">
        <div className="logos">
          <img src="assets/img/logo/logo1.png" alt="" />
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="mobile-nav mobile-nav1">
        <ul className="mobile-nav-list nav-list1">
          <li className="has-sub hash-has-sub">
            <Link to="/" className="hash-nav">
              Home{" "}
            </Link>
          </li>
          <li className="hash-has-sub">
            <Link to="/about" className="hash-nav">
              About
            </Link>
          </li>
          <li className="has-sub hash-has-sub">
            <Link to="/" className="hash-nav">
              Services
            </Link>
          </li>
          <li className="has-sub hash-has-sub">
            <Link to="/blogs" className="hash-nav">
              Blogs
            </Link>
          </li>
          <li className="hash-has-sub">
            <Link to="/contact" className="hash-nav">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="allmobilesection hash-has-sub">
          <Link to="/contact" className="header-btn1 hash-nav">
            Get Started{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
          <div className="single-footer">
            <h3>Contact Info</h3>
            <div className="footer1-contact-info">
              <div className="contact-info-single">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="contact-info-text hash-has-sub">
                  <a href="tel:+3(924)4596512" className="hash-nav">
                    +3(924)4596512
                  </a>
                </div>
              </div>

              <div className="contact-info-single">
                <div className="contact-info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-info-text hash-has-sub">
                  <a href="mailto:info@example.com" className="hash-nav">
                    info@example.com
                  </a>
                </div>
              </div>

              <div className="single-footer">
                <h3>Our Location</h3>

                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-info-text hash-has-sub">
                    <a href="mailto:info@example.com" className="hash-nav">
                      55 East Birchwood Ave.Brooklyn, <br /> New York
                      11201,United States
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-footer">
                <h3>Social Links</h3>

                <div className="social-links-mobile-menu">
                  <ul>
                    <li className="hash-has-sub">
                      <a href="#" className="hash-nav">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="hash-has-sub">
                      <a href="#" className="hash-nav">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="hash-has-sub">
                      <a href="#" className="hash-nav">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="hash-has-sub">
                      <a href="#" className="hash-nav">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
