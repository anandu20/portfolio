// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in font-serif">Technical Skills</h2>
      <p className=' w-3/4 m-auto text-xl text-center mb-12 text-gray-800 animate-fade-in'>I have a strong skills in JavaScript, HTML, CSS, Node.js, Express, and Tailwind CSS, featuring dynamic interactivity with JavaScript, responsive layouts with Tailwind, and a backend server built using Node.js and Express to handle form submissions and serve data.</p>


      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {/* JavaScript */}
        <div
          className="p-3 rounded-lg shadow-lg bg-yellow-300 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">JavaScript</h3>
        </div>

        {/* React */}
        <div
          className="p-3 rounded-lg shadow-lg bg-cyan-400 hover:bg-cyan-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">React</h3>
        </div>

        {/* Tailwind CSS */}
        <div
          className="p-3 rounded-lg shadow-lg bg-blue-400 hover:bg-blue-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">Tailwind CSS</h3>
        </div>

        {/* HTML */}
        <div
          className="p-3 rounded-lg shadow-lg bg-orange-400 hover:bg-orange-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">HTML</h3>
        </div>

        {/* CSS */}
        <div
          className="p-3 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">CSS</h3>
        </div>

        {/* Node.js */}
        <div
          className="p-3 rounded-lg shadow-lg bg-green-400 hover:bg-green-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">Node.js</h3>
        </div>

        {/* Express */}
        <div
          className="p-3 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">Express</h3>
        </div>

        {/* MongoDB */}
        <div
          className="p-3 rounded-lg shadow-lg bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">MongoDB</h3>
        </div>

        <div
          className="p-3 rounded-lg shadow-lg bg-orange-400 hover:bg-orange-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">C</h3>
        </div>

        <div
          className="p-3 rounded-lg shadow-lg bg-cyan-400 hover:bg-cyan-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">C++</h3>
        </div>
        <div
          className="p-3 rounded-lg shadow-lg bg-red-400 hover:bg-cyan-500 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="font-medium text-xl text-gray-800">Sql</h3>
        </div>

        {/* Git & GitHub */}
        <div
          className="p-3 rounded-lg shadow-lg bg-gray-700 hover:bg-gray-800 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s' }}
        >
          <h3 className="font-medium text-xl text-white">Git & GitHub</h3>
        </div>
       
      </div>
    </section>
  );
};

export default Skills;

