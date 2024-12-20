import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3Alt, faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import './Skillanime.css'; // Import the CSS file for animations

const Skills = () => {
  // Function to trigger animations when element is in viewport
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('skill-card-visible'); // Apply animation when in viewport
        observer.unobserve(entry.target); // Stop observing after animation trigger
      }
    });
  };

  useEffect(() => {
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    skillCards.forEach(card => observer.observe(card));

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="py-20 pb-8 relative" 
      style={{
        backgroundImage: "url('./image/skillss.jpg')", // Add the path to your image here
        backgroundSize: "cover", // Ensure the image covers the section
        backgroundPosition: "center", // Keep the image centered
      }}
    >
      {/* Blur overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm z-0"
      ></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in font-serif">Technical Skills</h2>
        <p className='w-3/4 m-auto text-xl text-center mb-12 text-white animate-fade-in'>
          I have strong skills in JavaScript, HTML, CSS, Node.js, Express, MongoDB, SQL, Bootstrap, GitHub, and more, featuring dynamic interactivity with JavaScript, responsive layouts with Tailwind, and backend services built using Node.js, Express, and MongoDB. I also have experience in systems programming with C and C++.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {/* JavaScript */}
          <div className="skill-card bg-yellow-300 hover:bg-yellow-400 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.1s' }}>
            <FontAwesomeIcon icon={faJsSquare} size="3x" className="mb-2 text-gray-800 " />
            <h3 className="font-medium text-xl text-gray-800 ">JavaScript</h3>
          </div>

          {/* React */}
          <div className="skill-card bg-cyan-400 hover:bg-cyan-500 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.2s' }}>
            <FontAwesomeIcon icon={faReact} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">React</h3>
          </div>

          {/* Tailwind CSS */}
          <div className="skill-card bg-blue-400 hover:bg-blue-500 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.3s' }}>
            <FontAwesomeIcon icon={faCss3Alt} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">Tailwind CSS</h3>
          </div>

          {/* HTML */}
          <div className="skill-card bg-orange-400 hover:bg-orange-500 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.4s' }}>
            <FontAwesomeIcon icon={faHtml5} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">HTML</h3>
          </div>

          {/* CSS */}
          <div className="skill-card bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.1s' }}>
            <FontAwesomeIcon icon={faCss3Alt} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">CSS</h3>
          </div>

          {/* Node.js */}
          <div className="skill-card bg-green-500 hover:bg-green-600 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.2s' }}>
            <FontAwesomeIcon icon={faNodeJs} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">Node.js</h3>
          </div>

          {/* Bootstrap */}
          <div className="skill-card bg-purple-400 hover:bg-purple-500 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.3s' }}>
            <FontAwesomeIcon icon={faBootstrap} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">Bootstrap</h3>
          </div>

          {/* GitHub */}
          <div className="skill-card bg-green-500 hover:bg-green-600 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.4s' }}>
            <FontAwesomeIcon icon={faGithub} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">GitHub</h3>
          </div>

          {/* Express */}
          <div className="skill-card bg-gray-600 hover:bg-gray-700 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.1s' }}>
            <FontAwesomeIcon icon={faServer} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">Express</h3>
          </div>

          {/* MongoDB */}
          <div className="skill-card bg-green-600 hover:bg-green-700 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.2s' }}>
            <FontAwesomeIcon icon={faDatabase} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">MongoDB</h3>
          </div>

          {/* SQL */}
          <div className="skill-card bg-red-500 hover:bg-red-600 transition duration-300 rounded-lg shadow-lg p-4" style={{ animationDelay: '0.3s' }}>
            <FontAwesomeIcon icon={faDatabase} size="3x" className="mb-2 text-gray-800" />
            <h3 className="font-medium text-xl text-gray-800">SQL</h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
