import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa'; // Import Bootstrap icon
import { DiJava } from 'react-icons/di';

const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
    { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <DiJava className="text-red-500" />, name: 'Java' }, // Replaced Redux with Java
    { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
    { icon: <FaBootstrap className="text-indigo-400" />, name: 'React-Bootstrap' },
    { icon: <SiExpress className="text-gray-300" />, name: 'Express.js' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB' },
    { icon: <FaDatabase className="text-red-300" />, name: 'SQL' },
    { icon: <FaGitAlt className="text-orange-400" />, name: 'Git' },
  ];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0e0e0e] text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center bg-[#161616] hover:bg-[#1f1f1f] rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-600/20"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}