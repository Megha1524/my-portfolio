import React, { useRef, useState } from "react";
import "./Contect.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "@emailjs/browser";

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yowp2tj",
        "template_lmnjkv9",
        form.current,
        "LDY8ToP1xK8QP2SaD"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
   const resetForm = () => {
     form.current.reset();
   };

  return (
    <div id="Contact" className="contain">
      <div className="wrapper">
        <div className="form">
          <h4>GET IN TOUCH</h4>
          <form id="submit-form" ref={form} onSubmit={sendEmail}>
            <p>
              <input
                // id="name"
                name="from_name"
                className="form-input"
                type="text"
                placeholder="Your Name*"
                required
              />
            </p>
            <p>
              <input
                id="email"
                name="from_email"
                className="form-input"
                type="email"
                placeholder="Your Email*"
                required
              />
            </p>
            <p className="full-width">
              <input
                id="company-name"
                name="companyName"
                className="form-input"
                type="text"
                placeholder="Company Name*"
                required
              />
            </p>
            <p className="full-width">
              <textarea
                minLength="20"
                id="message"
                name="message"
                cols="30"
                rows="7"
                placeholder="Your Message*"
                required
              ></textarea>
            </p>
            <p className="full-width">
              <input type="submit" className="submit-btn" value="Submit" />
              <input
                type="button"
                className="reset-btn"
                value="Reset"
                onClick={resetForm}
              />
            </p>
          </form>
        </div>
        <div className="social-menu">
          <h3>follow me </h3>
          <ul>
            <li>
              <a
                href="https://github.com/SunilChauhan24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sunilchauhan_.__24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sunil-chauhan-038ab3260/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100016004328712"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/SunilChauh2415"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contect;
