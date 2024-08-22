import React from 'react'
import css from "../img/css.svg"
import html from "../img/html.svg";
import js from "../img/js.svg";
import mongodb from "../img/mongodb.svg";
import mysql from "../img/mysql.svg";
import nodejs from "../img/nodejs.svg";
import reactjs from "../img/react.svg";
import "./Skils.css";


const Skils = () => {
    const skills = [
     
      { img: css, name: "CSS" },
      { img: html, name: "HTML" },
      { img: js, name: "JavaScript" },
      { img: mongodb, name: "MongoDB" },
      { img: mysql, name: "MySQL" },
      { img: nodejs, name: "NodeJS" },
      { img: reactjs, name: "ReactJS" },
    ];
  return (
    <section id='Skills' className="skills">
      <h1>My Skills</h1>
      <div className="cards">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skils
