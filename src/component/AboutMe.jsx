import React, { useEffect, useState } from 'react';
import './animation.css'; // Import animation styles

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
      className={`py-20 bg-gradient-to-r from-slate-900 to-slate-700 text-white ${fadeIn ? 'fade-in' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left Column: Profile Image */}
        <div
          className="flex content-start w-80 h-80 mb-8 md:mb-8 bg-[url('image/aa.jpg')] bg-top bg-cover bg-no-repeat rounded-full border-4 border-white shadow-2xl ml-20 profile-image"
        ></div>
        
        {/* Right Column: About Text */}
        <div className="flex-1 max-w-xl text-content">
          <h2 className="text-4xl font-bold text-white mb-4  ">
            I'm <span className='text-blue-600'>Anandu Ramachandran</span> 
          </h2>
          <p className="text-lg mb-6 mt-10 text-white font-sans">
            Highly motivated and detail-oriented MERN Stack Developer with a Bachelor of Computer Applications (BCA). Proficient in building and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in designing responsive user interfaces, developing RESTful APIs, and managing databases for seamless application.
          </p>
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
            className="inline-block mt-6 px-8 py-3 text-white ms-6 bg-green-600 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 resume-button button-hover"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
