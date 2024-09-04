import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { submitContact, listServices } from "../actions/ApisAction";

const Contact = () => {
  const location = useLocation();
  const [services, setServices] = useState([]);
  const [contactForm, setContactForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service_type: "",
    message: "",
  });
  const errorData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service_type: "",
    message: "",
  };
  const [contactFormError, setContactFormError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service_type: "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContactForm = (e, v=null) => {
    let name;
    let value;
    if (v === ''){
      document.querySelector('div.service-area span.current').style.fontWeight = 'normal';
      name = e;
      value = v;
    }
    else if (v){
      name = e;
      value = v;
      document.querySelector('div.service-area span.current').style.fontWeight = 'bold';
    }
    else{
      name = e.target.name;
      value = e.target.value;
    }
    setContactForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitContactForm = async()=>{
    setLoading(true);
    setContactFormError(errorData);
    const response = await submitContact(contactForm);
    if (response[0] === 201){
      setContactForm(errorData);
      setContactSuccess(`Thank you, ${contactForm.first_name} ${contactForm.last_name}! Your message has been successfully submitted. Our team will review your inquiry and respond within 24-48 hours.`);
      document.getElementById('no-service').click();
      setTimeout(()=>{
        document.getElementById('no-service').click();
      }, 200);
      setTimeout(()=>{
        window.location.href = '/';
      }, 3000);
    }
    else if (response[0] === 400){
      setContactFormError(response[1]);
    }
    else{
      alert('Something went wrong!');
    }
    setLoading(false);
  };

  useEffect(() => {
    const closeMenu = document.getElementsByClassName("menu-close")[0];
    if (closeMenu) {
      closeMenu.click();
    };

    (async()=>{
      const servcs = await listServices();
      if(servcs){
        setServices(servcs);
      };
    })();

    setTimeout(() => {
      const animatedEles = document.getElementsByClassName("aos-init");
      for (let ele of animatedEles) {
        ele.classList.add("aos-animate");
      }
    }, 200);
  }, [location.pathname]);

  return (
    <>
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
              <h2
                className="text-anime-style-3"
                style={{ perspective: "400px" }}
              >
                <div
                  className="split-line"
                  style={{
                    display: "block",
                    textAlign: "center",
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
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      G
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      e
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      t
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      I
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      n
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      T
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      o
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      u
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      c
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      h
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      W
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      i
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      t
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      h
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      U
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      s
                    </div>
                  </div>{" "}
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      T
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      o
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      d
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      a
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      y
                    </div>
                  </div>
                </div>
              </h2>
              <p>
                We're here to help! If you have any questions or want to discuss{" "}
                <br className="d-md-block d-none" /> how our software
                development services can benefit your business,
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
                Have questions or need a custom solution? Get in touch with us
                today. Our team is here to assist you.
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
                Let’s connect! We’re here to answer your inquiries and provide
                the support you need for your business.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" name="first_name" placeholder="First Name" value={contactForm.first_name} onChange={handleContactForm} />
                      {contactFormError.first_name ? <p className="error-list">{contactFormError.first_name}</p> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input type="text" name="last_name" placeholder="Last Name" value={contactForm.last_name} onChange={handleContactForm} />
                      {contactFormError.last_name ? <p className="error-list">{contactFormError.last_name}</p> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={contactForm.email}
                        name="email"
                        onChange={handleContactForm}
                      />
                      {contactFormError.email ? <p className="error-list">{contactFormError.email}</p> : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-area">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone_number"
                        maxLength={15}
                        value={contactForm.phone_number}
                        onChange={handleContactForm}
                      />
                      {contactFormError.phone_number ? <p className="error-list">{contactFormError.phone_number}</p> : null}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <div
                        className="nice-select service-area nice-select6"
                        tabIndex="0"
                      >
                        <span className="current" data-service-type="Service Type">Service Type</span>
                        <ul className="list">
                          <li
                            id="no-service"
                            data-value="1"
                            data-display="Service Type"
                            className="option selected"
                            onClick={()=>handleContactForm('service_type', '')}
                          >
                            Service Type
                          </li>
                          {services.map((srvc, index) =>{
                            return (
                              <li data-value="" key={index} className="option" onClick={()=>handleContactForm('service_type', srvc.id)}>
                                {srvc.title}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      {contactFormError.service_type ? <p className="error-list">{contactFormError.service_type}</p> : null}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactForm}
                      ></textarea>
                      {contactFormError.message ? <p className="error-list">{contactFormError.message}</p> : null}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {contactSuccess ?
                      <div className="msg-success">{contactSuccess}</div>
                      :
                      <div className="input-area">
                        <button className="header-btn1" type="button" onClick={loading ? null : submitContactForm}>
                          {loading ?
                            <div class="loading-loader"></div>
                            :
                            <>
                              Submit{" "}
                              <span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </>
                          }
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
