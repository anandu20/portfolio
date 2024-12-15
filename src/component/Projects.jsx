// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20  bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white font-serif">
        My Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <h3 className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          OLX Clone
          </h3>
          <p className="text-gray-700 mb-4">
            A description of the project goes here. This project involves
            working with React and Tailwind CSS.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Instagram Clone
          </h3>
          <p className="text-gray-700 mb-4">
            A description of the project goes here. This project is focused on
            building responsive websites using HTML, CSS, and JavaScript.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <h3 className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          BookMyShow Clone

          </h3>
          <p className="text-gray-700 mb-4">
            A description of the project goes here. This project uses Node.js
            and Express to build a backend application.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
