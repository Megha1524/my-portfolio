import React from "react";
import "./Navbar.css";
import logo from "../img/sc.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { mycv } from "../../public/cv.pdf";

const Navbar = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="Navbar">
      <nav>
        <img src={logo} alt="Sunil Chauhan" className="logo" />
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              activeClass="active"
              to="Navbar"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-0}
              duration={600}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={600}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-0}
              duration={600}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="landing">
        <main className="container">
          <p>Hello I'm</p>
          <section className="animation">
            <div className="first">
              <div>Frontend Developer</div>
            </div>
            <div className="second">
              <div>Backend Developer</div>
            </div>
            <div className="third">
              <div>Mern Stack Developer</div>
            </div>
          </section>

          <button className="btn1">
            <a href={mycv} download={"download"}>
              download cv
            </a>
          </button>
        </main>
      </div>
    </header>
  );
};

export default Navbar;
