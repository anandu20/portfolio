import React, { useEffect, useRef, useState } from 'react';
import './ProjAnima.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 pb-8 bg-gradient-to-r from-[#91736B] to- [#FBF0F4]  ${isVisible ? 'animate-slide-in' : ''}`}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-serif">
        My Projects
      </h2>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Project 1 */}
        <div className="flex flex-col md:flex-row p-12 gap-24 items-center rounded-xl">
          <img
            src="./image/olxx.jpg"
            alt="OLX Clone"
            className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-6 md:mb-0 md:mr-4 border-r-2 border-gray-600 pr-8"
          />
          <div className="md:w-1/2">
            <h3 className="font-semibold text-3xl text-black mb-4">OLX Clone</h3>
            <p className="text-lg mb-6 mt-10 text-black font-sans">
              A full-stack OLX clone for buying and selling products, with features like product listing, search, and user profiles. Built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.
            </p>
            <a
              href="#"
              className="inline-block py-2 px-6 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col md:flex-row p-16 rounded-xl gap-24 items-center">
          <img
            src="./image/instaa.jpg"
            alt="Instagram Clone"
            className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-6 md:mb-0 md:mr-4 border-r-2 border-gray-600 pr-8"
          />
          <div className="md:w-1/2">
            <h3 className="font-semibold text-3xl text-black mb-4">Instagram Clone</h3>
            <p className=" text-lg mb-6 mt-10 text-black font-sans">
              A full-stack Instagram clone built with the MERN stack. Users can create accounts, post images, like posts, and follow others. Built using MongoDB, Express, React, and Node.js.
            </p>
            <a
              href="#"
              className="inline-block py-2 px-6 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col md:flex-row p-16 rounded-xl gap-24 items-center">
          <img
            src="./image/show.png"
            alt="BookMyShow Clone"
            className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-4 md:mb-0 md:mr-4 border-r-2 border-gray-600 pr-8"
          />
          <div className="md:w-1/2">
            <h3 className="font-semibold text-3xl text-black mb-6">BookMyShow Clone</h3>
            <p className="text-lg mb-6 mt-10 text-black font-sans">
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
      </div>
    </section>
  );
};

export default Projects;