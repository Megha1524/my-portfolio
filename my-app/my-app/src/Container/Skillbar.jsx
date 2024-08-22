import React from "react";
import { useInView } from "react-intersection-observer";
import "./Skillbar.css";

const Skillbar = () => {
  const { ref: expRef, inView: expVisible } = useInView({ triggerOnce: true });
  const { ref: eduRef, inView: eduVisible } = useInView({ triggerOnce: true });

  return (
    <section className="experience-education-section">
      <h2 className="section-title">My Journey</h2>
      <div className="card-container">
        <div
          ref={expRef}
          className={`card experience-card ${expVisible ? "animate" : ""}`}
        >
          <h3>Experience</h3>
          <ul>
            <li>
              <h4>MongoDB</h4>
              <p>
                Experience with creating and managing databases using MongoDB.
              </p>
            </li>
            <li>
              <h4>Express.js</h4>
              <p>Developed RESTful APIs and middleware using Express.js.</p>
            </li>
            <li>
              <h4>React.js</h4>
              <p>Built dynamic and responsive user interfaces with React.js.</p>
            </li>
            <li>
              <h4>Node.js</h4>
              <p>
                Implemented server-side logic and integrated with databases
                using Node.js.
              </p>
            </li>
          </ul>
        </div>
        <div
          ref={eduRef}
          className={`card education-card ${eduVisible ? "animate" : ""}`}
        >
          <h3>Education</h3>
          <ul>
            <li>
              <h4>Bachelor of Computer Applications</h4>
              <p>
                <span className="institute">
                  President Institute of Computer Application
                </span>
                ,<br /><span className="year"> 2021-2023</span>,
                <br /><span className="cgpa"> CGPA: 8.5</span>
              </p>
            </li>
            <li>
              <h4>Master of Computer Application</h4>
              <p>
                <span className="institute">Indus University</span>,
                <br /><span className="year"> 2023-2025</span>,
               <br /> <span className="cgpa"> CGPA: 9.0</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skillbar;
