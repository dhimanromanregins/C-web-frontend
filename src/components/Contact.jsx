import { useEffect } from "react";
import { useLocation } from 'react-router-dom';


const Contact = () => {
  const location = useLocation();

  useEffect(()=>{
    const closeMenu = document.getElementsByClassName('menu-close')[0];
    if (closeMenu){
      closeMenu.click();
    };

    setTimeout(()=>{
      const animatedEles = document.getElementsByClassName('aos-init');
      for (let ele of animatedEles){
        ele.classList.add('aos-animate');
      };
    }, 200)
  }, [location.pathname]);

  return (
    <div className="contact1-section-area sp6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="contact-header-area text-center heading2">
              <img
                src="assets/img/elements/star2.png"
                alt=""
                className="star2 keyframe5"
              />
              <img
                src="assets/img/elements/star2.png"
                alt=""
                className="star3 keyframe5"
              />
              <h2 className="text-anime-style-3" style={{perspective: '400px'}}>
                <div
                  className="split-line"
                  style={{ display: 'block', textAlign: 'center', position: 'relative' }}
                >
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      G
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      e
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      t
                    </div>
                  </div>{" "}
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      I
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      n
                    </div>
                  </div>{" "}
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      T
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      o
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      u
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      c
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      h
                    </div>
                  </div>{" "}
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      W
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      i
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      t
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      h
                    </div>
                  </div>{" "}
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      U
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      s
                    </div>
                  </div>{" "}
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      T
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      o
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      d
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      a
                    </div>
                    <div style={{
      position: 'relative',
      display: 'inline-block',
      translate: 'none',
      rotate: 'none',
      scale: 'none',
      transform: 'translate(0px, 0px)',
      opacity: '1'
}}>
                      y
                    </div>
                  </div>
                </div>
              </h2>
              <p>
              We're here to help! If you have any questions or want to discuss <br className="d-md-block d-none" /> how our software development services can benefit your business,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-5 aos-init"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="contact-info-area">
              <h3>Contact Info</h3>
              <p>
              Have questions or need a custom solution? Get in touch with us today. Our team is here to assist you.
              </p>
              <div className="space32"></div>
              <div className="contact-auhtor-box">
                <div className="icons">
                  <img src="assets/img/icons/location2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <a href="#">
                    8708 Technology Forest Pl Suite{" "}
                    <br className="d-lg-block d-none" /> 125 -G, The Woodlands,
                    TX 773
                  </a>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-auhtor-box">
                <div className="icons">
                  <img src="assets/img/icons/phone2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <a href="tel:123-456-7890">
                    123-456-7890 <br />
                    123-456-7890
                  </a>
                </div>
              </div>
              <div className="space40"></div>
              <div className="contact-auhtor-box">
                <div className="icons">
                  <img src="assets/img/icons/email2.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Email Address</h4>
                  <a href="mailto:infoseoc@.gmail.com">
                    infoseoc@.gmail.com <br />
                    infoseoc@.gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 aos-init"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            <div className="contact-boxarea">
              <h3>Get In Touch</h3>
              <p>
              Let’s connect! We’re here to answer your inquiries and provide the support you need for your business.
              </p>
              <form action="https://api.web3forms.com/submit" method="POST">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="number"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <select
                        name="country"
                        id="country"
                        className="country-area nice-select6"
                        style={{display: 'none'}}
                      >
                        <option value="1" data-display="Service Type">
                          Service Type
                        </option>
                        <option value="">Belgium</option>
                        <option value="">Brezil</option>
                        <option value="">Argentina</option>
                        <option value="">Bangladesh</option>
                        <option value="">Germany</option>
                      </select>
                      <div
                        className="nice-select country-area nice-select6"
                        tabIndex="0"
                      >
                        <span className="current">Service Type</span>
                        <ul className="list">
                          <li
                            data-value="1"
                            data-display="Service Type"
                            className="option selected"
                          >
                            Software Development
                          </li>
                          <li data-value="" className="option">
                            Web Development
                          </li>
                          <li data-value="" className="option">
                            Automation
                          </li>
                          <li data-value="" className="option">
                            Scripting
                          </li>
                          <li data-value="" className="option">
                            Devops
                          </li>
                          <li data-value="" className="option">
                            AI/ML
                          </li>
                          <li data-value="" className="option">
                            Blockchain
                          </li>
                          <li data-value="" className="option">
                            Cyber Security
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea
                        placeholder="Your Message"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button className="header-btn1">
                        Free Consultation{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
