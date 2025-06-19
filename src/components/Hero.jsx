import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/profile.jpeg';
import '../App.css';

export default function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      import('vanta/dist/vanta.net.min').then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x9146ff,
          backgroundColor: 0x000000,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 17.0,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="hero"
      ref={vantaRef}
      className="relative min-h-screen w-full flex items-center justify-center px-6 text-white overflow-hidden"
    >
      {/* Floating particles (optional) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="floating-star delay-1000" />
        <div className="floating-star delay-2000" />
        <div className="floating-star delay-3000" />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16 py-20">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
            Hey, I’m{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Utkarsh Raj Patel
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            <TypeAnimation
              sequence={[
                'Full MERN Stack Developer 💻',
2000,
'UI/UX Designer 🎨',
2000,
'Software Developer 👨‍💻',
2000,
'Cloud Enthusiast ☁️',
2000,
'Creative Problem Solver 🧠',
2000,
'Passionate Tech Professional 🚀',
2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-200 text-xl font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            I build scalable full-stack apps, solve real-world problems, and craft engaging user experiences with modern web tech.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
          <a
  href="/UtkarshResume.pdf"
  download
  className="bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition drop-shadow-lg"
>
  Download CV
</a>
           
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="group w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-purple-600 shadow-[0_0_30px_rgba(145,70,255,0.5)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40">
            <img
              src={profile}
              alt="Utkarsh Raj"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}