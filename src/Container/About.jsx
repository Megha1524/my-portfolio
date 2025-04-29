import React from 'react'
import  { useEffect, useState, useRef} from "react";
import "./About.css";
import aboutimg from "../img/meghaimg.jpg";

const About = () => {
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAbout(true);
            observer.disconnect(); // Optional: Disconnect observer after the animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id='About' className={`about-section ${showAbout ? "show" : ""}`} ref={aboutRef}>
      <div className="about-image">
        <img src={aboutimg} alt="About" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello! I am a passionate MERN Stack Developer with a deep love for
          crafting dynamic, user-friendly web applications. With a strong
          foundation in MongoDB, Express.js, React, and Node.js, I thrive in
          creating solutions that enhance user experience and drive business
          success.
        
          On the front-end, I excel in creating intuitive and responsive
          interfaces using React. I believe in the power of clean, maintainable
          code and strive to implement best practices in all my projects. My
          proficiency with JavaScript, HTML, and CSS ensures that the
          applications I build are not only visually appealing but also highly
          functional.
        
          On the back-end, I leverage Node.js and Express.js to develop robust
          APIs and server-side logic. My experience with MongoDB allows me to
          design and manage databases that are scalable and efficient, ensuring
          that the applications can handle growth and maintain performance.
      
          Throughout my career, I have worked on various projects, from small
          business websites to large-scale enterprise applications. I enjoy
          collaborating with teams, learning new technologies, and continuously
          improving my craft. I am always eager to take on new challenges and
          build innovative solutions that make a difference.
       
          Let's connect and discuss how I can help bring your ideas to life with
          my expertise in the MERN stack!
        </p>
      </div>
    </div>
  );
};

export default About
