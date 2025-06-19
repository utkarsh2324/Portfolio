// src/components/Certificates.jsx

import React from 'react';

const certificates = [
  {
    name: ' AWS Academy Cloud Architecting',
    provider: 'AWS',
    date: '10/28/2024',
    link: 'https://drive.google.com/file/d/1oX9Ae7ezdoUCVwA3i3I2nE1iVLSc-k1F/view?usp=sharing',
  },
  {
    name: 'Azure AI-900',
    provider: 'Microsoft',
    date: '08/05/2024',
    link: 'https://drive.google.com/file/d/1XKu-IJ7ltTSLcVJjOQJ_36rd2oItkQum/view?usp=sharing',
  },
];

export default function Certificates() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white px-6 py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Certificates
        </span>
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#161616] rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-purple-600/30 transition-shadow duration-300 group border border-white/10 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
              {cert.name}
            </h3>
            <p className="text-gray-300 mt-2">Issued by: <span className="text-white">{cert.provider}</span></p>
            <p className="text-gray-500 text-sm mt-1">Date: {cert.date}</p>

            <div className="mt-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                📄 View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}