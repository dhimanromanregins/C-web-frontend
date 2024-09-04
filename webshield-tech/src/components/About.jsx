import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cta from './Cta';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const closeMenu = document.getElementsByClassName('menu-close')[0];
    if (closeMenu){
      closeMenu.click();
    };

    setTimeout(() => {
      const animatedEles = document.getElementsByClassName("aos-init");
      for (let ele of animatedEles) {
        ele.classList.add("aos-animate");
      }
    }, 200);
  }, [location.pathname]);
  return (
    <>
      <div className="about1-section-area sp6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-images">
                <figure
                  className="image-anime reveal"
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <img
                    src="assets/img/all-images/about-img1.png"
                    alt=""
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                    }}
                  />
                </figure>
                <img
                  src="assets/img/elements/star1.png"
                  alt=""
                  className="star1 keyframe5"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-area heading2">
                <div className="arrow-circle">
                  <Link to="/about">
                    <img
                      src="assets/img/elements/elements4.png"
                      alt=""
                      className="elements4 keyframe5"
                    />
                    <img
                      src="assets/img/icons/arrow.svg"
                      alt=""
                      className="arrow"
                    />
                  </Link>
                </div>
                <h2
                  className="text-anime-style-3"
                  style={{ perspective: "400px" }}
                >
                  <div
                    className="split-line"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        C
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        o
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        m
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        p
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        l
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        e
                      </div>
                    </div>{" "}
                  </div>
                  <div
                    className="split-line"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        I
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        T
                      </div>
                    </div>{" "}
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        S
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        o
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        l
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        u
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        i
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        o
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        n
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        s
                      </div>
                    </div>

                  </div>
                  <div
                    className="split-line"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        f
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        o
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        r
                      </div>
                      &nbsp;
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        Y
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        o
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        u
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        r
                      </div>
                    </div>{" "}
                  </div>
                  <div
                    className="split-line"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        B
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        u
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        s
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        i
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        n
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        s
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform:
                            "translate(0px, 0px) rotate(0deg) scale(1)",
                          opacity: 1,
                        }}
                      >
                        s
                      </div>
                    </div>
                  </div>
                </h2>
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="aos-init"
                >
                  Offering full-service software development, including custom applications, system integration, and technology consulting to drive your business forward.
                </p>
                <div
                  className="btn-area aos-init"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <Link to="/about" className="header-btn1">
                    Learn More
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about-auhtor-images">
                <img
                  src="assets/img/elements/elements5.png"
                  alt=""
                  className="elements5 keyframe5"
                />
                <figure
                  className="image-anime reveal"
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <img
                    src="assets/img/all-images/about-img2.png"
                    alt=""
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                    }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="works-inner-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="works-header-area heading2">
                <h5>Why Choose Us</h5>
                <h2>Experience the Advantage Why We're the Right Choice</h2>
                <p>
                At Webshield Technologies, we know you have many choices for IT services. So why choose us? Here are a few reasons:
                </p>
                <div className="space32"></div>
                <div className="works-content-box">
                  <div className="icons">
                    <img src="assets/img/icons/works-icons7.svg" alt="" />
                  </div>
                  <div className="content">
                    <a href="case.html">Proven Result</a>
                    <p>
                    We have a proven track record of delivering measurable results for our clients, from optimizing IT infrastructure to enhancing software performance.{" "}
                    </p>
                  </div>
                </div>
                <div className="space20"></div>
                <div className="works-content-box">
                  <div className="icons">
                    <img src="assets/img/icons/works-icons8.svg" alt="" />
                  </div>
                  <div className="content">
                    <a href="case-single.html">Customized Solutions</a>
                    <p>
                    We believe that one size does not fit all in IT solutions. That's why we take the time to understand your unique needs and tailor our services accordingly.{" "}
                    </p>
                  </div>
                </div>
                <div className="space20"></div>
                <div className="works-content-box">
                  <div className="icons">
                    <img src="assets/img/icons/works-icons9.svg" alt="" />
                  </div>
                  <div className="content">
                    <a href="case-single.html">Dedicated Support</a>
                    <p>
                    Your success is our top priority. That's why we offer dedicated support and guidance at every step to ensure your IT needs are met effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-all-images-area">
                <img
                  src="assets/img/elements/elements14.png"
                  alt=""
                  className="elements12 keyframe5"
                />
                <img
                  src="assets/img/elements/elements15.png"
                  alt=""
                  className="elements13 keyframe5"
                />
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="img1 image-anime">
                      <div className="space100"></div>
                      <img src="assets/img/all-images/about-img6.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2 image-anime">
                      <img src="assets/img/all-images/about-img5.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service2-section-area sp1 bg2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="service2-header heading2 text-center">
                <img
                  src="assets/img/elements/star7.png"
                  alt=""
                  className="star2 keyframe5"
                />
                <img
                  src="assets/img/elements/star7.png"
                  alt=""
                  className="star3 keyframe5"
                />
                <h5>Our Value</h5>
                <h2>
                  Tailored Solutions, Proven Results,{" "}
                  <br className="d-md-block d-none" /> And Exceptional Service
                </h2>
                <p>
                  We pride ourselves on delivering a value proposition that goes
                  beyond expectations. Our <br className="d-md-block d-none" />{" "}
                  approach is centered on understanding your business inside
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="images-content-area">
                <div className="img1">
                  <img src="assets/img/all-images/service-img1.png" alt="" />
                </div>
                <div className="content-area">
                  <h5>Our Value</h5>
                  <a href="#" className="text">
                  Discover Our Unique Value Proposition: How We Accelerate Business Growth Through IT Excellence
                  </a>
                  <p>
                    we're committed to delivering exceptional value to our
                    clients. We understand that every business is unique,
                    personalized approach to every project we undertake.
                  </p>
                </div>
                <div className="arrow-area">
                  <a href="#">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="service-all-boxes">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="service2-auhtor-boxarea">
                      <div className="arrow">
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                      <div className="content-area">
                        <h5>Our Mission</h5>
                        <a href="#">
                        We strive to be more than just a service provider; we aim to be your trusted software development partner.{" "}
                        </a>
                        <p>
                          By staying true to our mission and values, we are
                          committed to helping businesses of all sizes achieve
                          their goals, realize their potential shape.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="service2-auhtor2-boxarea">
                      <div className="arrow">
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                      <div className="content-area">
                        <h5>Our Vision</h5>
                        <a href="#">
                          We aspire to create a world where every business owner
                          feels empowered
                        </a>
                        <p>
                          By staying true to our vision and values, we are
                          committed to driving positive change and shaping a
                          brighter future for businesses and communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-section-area sp2">
        <img
          src="assets/img/bg/cta-bg1.png"
          alt=""
          className="cta-bg1 aniamtion-key-2"
        />
        <img
          src="assets/img/bg/cta-bg2.png"
          alt=""
          className="cta-bg2 aniamtion-key-1"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 m-auto">
              <div className="skills-header text-center heading2">
                <h5>Skills</h5>
                <h2>Our Skills</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-10 m-auto">
            <div className="circle-progress-area">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle" data-percent="92">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>92%</div>
                      </div>
                    </div>
                    <p>Software Development</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle two" data-percent="90">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>90%</div>
                      </div>
                    </div>
                    <p>Devops</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle three" data-percent="97">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>97%</div>
                      </div>
                    </div>
                    <p>Web Development</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle four" data-percent="85">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>85%</div>
                      </div>
                    </div>
                    <p>Automation</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle four" data-percent="99">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>99%</div>
                      </div>
                    </div>
                    <p>Scripting</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle" data-percent="82">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>82%</div>
                      </div>
                    </div>
                    <p>Blockchain</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle" data-percent="80">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>80%</div>
                      </div>
                    </div>
                    <p>Cyber Security</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle" data-percent="83">
                        <canvas width="180" height="180"></canvas>
                        <canvas></canvas>
                        <div>83%</div>
                      </div>
                    </div>
                    <p>AI/ML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-inner-section-area sp2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="team2-header-area text-center heading2">
                <h5>Our Team</h5>
                <h2>Meet With Our Expert Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/team-img1.png" alt="" />
                </div>
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
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="team.html">John Doe</a>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/team-img2.png" alt="" />
                </div>
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
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="team.html">Jane Smith</a>
                  <p>Digital Marketing Officer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/team-img3.png" alt="" />
                </div>
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
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="team.html">Sarah Thompson </a>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea m-0">
                <div className="img1">
                  <img src="assets/img/all-images/team-img4.png" alt="" />
                </div>
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
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="team.html">David Garcia</a>
                  <p>Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta/>
    </>
  );
};

export default About;
