// src/components/Projects.jsx

import React from 'react';

const projects = [
  {
    title: 'Movie Recommender App(Ongoing)',
    description: 'Built with React and TMDB API. Allows users to filter movies by genre, rating, language, and platform.',
    tech: ['React', 'Tailwind CSS', 'TMDB API'],
    link: 'https://yourmovieapp.demo',
    github: 'https://github.com/yourgithub/movie-app',
  },
  {
    title: 'CineQuery Chatbot(Ongoing)',
    description: 'A movie chatbot that answers user queries using NLP and APIs. Built with React and Watchmode.',
    tech: ['React', 'Watchmode API', 'OpenAI'],
    link: 'https://cinequery.demo',
    github: 'https://github.com/yourgithub/cinequery',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio site showcasing projects, skills, and resume. Features dark theme and Vanta.js background.',
    tech: ['React', 'Tailwind CSS', 'Vanta.js'],
    link: 'https://yourportfolio.demo',
    github: 'https://github.com/yourgithub/portfolio',
  },
  {
    title: 'YourTube(Ongoing)',
    description: 'Developed YourTube, a Node.js and MongoDB-based backend replicating YouTube features like uploads, likes, comments, subscriptions, playlists, and tweet-style posts Implemented secure JWT authentication and middleware to restrict unauthorized actions and support user profiles with activity feeds.',
    tech: ['Node.js','Express.js','MongoDB'],
    link: 'https://yourportfolio.demo',
    github: 'https://github.com/yourgithub/portfolio',
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white px-6 py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161616] rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-purple-600/30 transition-shadow duration-300 group border border-white/10 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-700/30 px-2 py-1 rounded-full text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                🔗 Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:underline"
              >
                🛠 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}