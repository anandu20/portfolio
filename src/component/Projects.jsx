import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20  bg-gradient-to-r from-slate-900 to-slate-700 text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-12 text-white font-serif animate-fade-in">
        My Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div
          className="bg-gradient-to-r from-slate-700 to-slate-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <img
            src="https://via.placeholder.com/400x250?text=OLX+Clone"
            alt="OLX Clone"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-3xl text-white mb-4">
            OLX Clone
          </h3>
          <p className="text-gray-200 mb-4">
            A full-stack OLX clone for buying and selling products, with features like product listing, search, and user profiles. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.
          </p>
          <a
            href="#"
            className="inline-block py-2 px-6 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div
          className=" bg-gradient-to-r from-slate-700 to-slate-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <img
            src="https://via.placeholder.com/400x250?text=Instagram+Clone"
            alt="Instagram Clone"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-3xl text-white mb-4">
            Instagram Clone
          </h3>
          <p className="text-gray-200 mb-4">
            A full-stack Instagram clone built with the MERN stack. Users can create accounts, post images, like posts, and follow others. Built using MongoDB, Express, React, and Node.js.
          </p>
          <a
            href="#"
            className="inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div
          className="bg-gradient-to-r from-slate-700 to-slate-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <img
            src="https://via.placeholder.com/400x250?text=BookMyShow+Clone"
            alt="BookMyShow Clone"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-3xl text-white mb-4">
            BookMyShow Clone
          </h3>
          <p className="text-gray-200 mb-4">
            A clone of the popular BookMyShow platform, allowing users to browse movies, view details, and explore showtimes. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.
          </p>
          <a
            href="#"
            className="inline-block py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
