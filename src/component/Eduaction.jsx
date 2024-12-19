import React, { useEffect, useState } from 'react';
import { FaSchool, FaGraduationCap, FaCode } from 'react-icons/fa'; // Use icons for visual appeal
import './EducationAnime.css'; // Custom animation and styling

const Education = () => {
  // State to handle the fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect when component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      id="education"
      className={`py-20 pb-8 relative`} // Add relative to position pseudo-element
      style={{
        backgroundImage: "url('./image/pass.jpg')", // Path to your image
        backgroundSize: "cover", // Ensure it covers the whole section
        backgroundPosition: "center", // Keep the image centered
      }}
    >
      {/* Blur overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm z-0"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10 pt-20 py-10 font-serif">My Education</h2>

        <div className="space-y-12 md:space-y-16">
          {/* MERN Stack Course */}
          <div className="education-card p-6  bg-opacity-70 flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-x-6 transition-all duration-700 py-6 rounded-lg bg-white">
            <FaCode className="w-12 h-12 text-yellow-500 mb-4 md:mb-0 md:mr-6" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-700">MERN Stack Developer Course</h3>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">Synneffo Solutions</h3>
              <p className="text-gray-900 mt-2 text-lg ">
                A comprehensive course covering MongoDB, Express.js, React.js, and Node.js. Focused on building full-stack web applications with responsive UIs and RESTful APIs.
              </p>
              <p className="text-gray-900 text-lg py-2 font-semibold">Completed: 2024</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="education-card bg-white p-6 bg-opacity-70 flex flex-col  md:flex-row items-center md:items-center space-y-6 md:space-x-6 transition-all duration-700 py-6 rounded-lg">
            <FaGraduationCap className="w-12 h-12 text-blue-500 mb-4 md:mb-0 md:mr-6" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-700">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-900 mt-2 text-xl font-semibold">Mahatma Gandhi University</p>
              <p className="text-gray-900 text-lg mt-2">
                A well-rounded degree in Computer Applications with a focus on programming, database management, software development, and web technologies.
              </p>
              <p className="text-gray-900 text-lg py-2 font-semibold">Completed: 2024</p>
            </div>
          </div>

          {/* Plus Two Education */}
          <div className="education-card bg-white p-6 bg-opacity-70 flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-x-6 transition-all duration-700 py-6 rounded-lg">
            <FaSchool className="w-12 h-12 text-purple-500 mb-4 md:mb-0 md:mr-6" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-blue-700">Plus Two (12th Grade)</h3>
              <p className="text-gray-900 mt-2 text-xl font-semibold">C.Kesavan Memorial Higher Secondary School</p>
              <p className="text-gray-900 mt-2 text-lg ">
                Focused on the Science stream, with subjects such as Mathematics,  Physics, and Bio-Science.
              </p>
              <p className="text-gray-900 text-lg py-2 font-semibold">Completed: 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
