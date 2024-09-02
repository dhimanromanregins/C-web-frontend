import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer1-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area">
              <Link to="/"><img src="assets/img/logo/logo1.png" alt="" /></Link>
              <p>
              Tailored software and cutting-edge technologies give businesses a competitive edge.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <img src="assets/img/icons/facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/icons/instagram.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/icons/linkedin.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/icons/youtube.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="footer-logo-area1">
              <h3>About Link</h3>
              <ul style={{margin: 0, padding: 0}}>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Testimonials</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area2">
              <h3>Get in touch</h3>
              <ul style={{margin: 0, padding: 0}}>
                <li>
                  <a href="mailto">
                    <img src="assets/img/icons/email.svg" alt="" />
                    <span>webshield@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/icons/location.svg" alt="" />
                    <span>
                      1234 Webshield Technologies{" "}
                      <br className="d-lg-block d-none" /> Mohali, TX 773
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:123-456-7890">
                    <img src="assets/img/icons/phone.svg" alt="" />
                    <span>123-456-7890</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-area3">
              <h3>Subscribe Our Newsletter</h3>
              <form action="#">
                <input type="text" placeholder="Enter Your email" />
                <button className="header-btn1">
                  {" "}
                  Subscribe{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="space80 d-lg-block d-none"></div>
        <div className="space40 d-lg-none d-block"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area">
              <div className="pera">
                <p>ⓒCopyright 2024 Webshield Technologies . All rights reserved</p>
              </div>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#" className="m-0">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
