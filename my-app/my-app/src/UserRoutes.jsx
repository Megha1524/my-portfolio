import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Container/Navbar";
import About from "./Container/About.jsx";
import Skils from "./Container/Skils.jsx";
import Projects from "./Container/Projects.jsx";
import Skillbar from "./Container/Skillbar.jsx";
import Contect from "./Container/Contect.jsx";

const UserRoutes = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/*" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skils />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skillbar" element={<Skillbar />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>
    </div>
  );
};

export default UserRoutes;
