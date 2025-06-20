import React from "react";
import { Routes, Route } from "react-router-dom";

// Sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skills";
import Project from "./components/Project";
import Certificate from "./components/Education";

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certificates" element={<Certificate />} />
      </Routes>
    </div>
  );
};

export default App;