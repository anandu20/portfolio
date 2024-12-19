import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './AboutAnimie.css'; // Import animation styles

const AboutMe = () => {
  // State to handle the fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect when component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      id="about"
      className={`py-20 pb-8 bg-[#9DBBAE] ${fadeIn ? 'fade-in' : ''}`}
    >
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 sm:gap-16">
        {/* Left Column: Profile Image and Icons */}
        <div className="flex flex-col items-center gap-8">
          <div
            className="flex content-start w-80 h-80 bg-[url('image/aa.jpg')] bg-top bg-cover bg-no-repeat rounded-full border-4 border-white shadow-2xl profile-image"
          ></div>
          
          {/* Social Icons - Centered Below Image */}
          <div className="flex justify-center space-x-6 mt-4 social-icons">
            <a href="tel:+1234567890" className="flex items-center text-white hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
            <a href="mailto:your.email@example.com" className="flex items-center text-white hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>

        {/* Right Column: About Text */}
        <div className="flex-1 max-w-xl text-content">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            I'm <span className='text-red-600'>Anandu Ramachandran</span> 
          </h2>
          <p className="text-lg mb-6 mt-10 text-black font-sans">
            Highly motivated and detail-oriented MERN Stack Developer with a Bachelor of Computer Applications (BCA). Proficient in building and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in designing responsive user interfaces, developing RESTful APIs, and managing databases for seamless application.
          </p>
          <div className='mt-24'>
            <a
              href="#projects"
              className="inline-block px-8 py-3 text-white bg-blue-700 rounded-full font-semibold text-lg hover:bg-blue-800 transition-all duration-300 project-button button-hover"
            >
              View My Projects
            </a>

            {/* Resume Download Button */}
            <a
              href="/resume/Resume.pdf" // Replace with the correct path to your resume file
              download="Resume.pdf" // You can customize the file name here
              className="inline-block mt-6 px-8 py-3 ms-6 text-white ms-1 bg-green-600 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 resume-button button-hover"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
