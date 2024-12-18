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
      className={`pb-16 bg-gradient-to-r from-[#91736B] to- [#FBF0F4] ${fadeIn ? 'fade-in' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 pt-20 py-10 font-serif">My Education</h2>

        <div className="space-y-12 md:space-y-16 ">
          {/* MERN Stack Course */}
          <div className=" bg-white flex flex-col md:flex-row items-center space-x-2 md:space-x-6 transition-all duration-700 py-6  rounded-lg">
            <FaCode className="w-12 h-12 text-yellow-500 mb-4 md:mb-0 md:ms-2" />
            <div className="text-center md:text-left ">
              <h3 className="text-2xl font-semibold text-red-700">MERN Stack Developer Course</h3>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">Synneffo Solutions</h3>
              <p className="text-gray-900 mt-2 text-lg font-semibold">
                A comprehensive course covering MongoDB, Express.js, React.js, and Node.js. Focused on building full-stack web applications with responsive UIs and RESTful APIs.
              </p>
              <p className="text-gray-900 text-lg py-2 font-semibold">Completed: 2024</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-white flex flex-col md:flex-row items-center space-x-2 md:space-x-6 transition-all duration-700 py-6 rounded-lg">
            <FaGraduationCap className="w-12 h-12 text-blue-500 mb-4 md:mb-0 md:ms-2" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-red-700">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-900 mt-2 text-xl font-semibold">Mahatma Gandhi University</p>
              <p className="text-gray-900 text-lg mt-2 font-semibold">
                A well-rounded degree in Computer Applications with a focus on programming, database management, software development, and web technologies.
              </p>
              <p className="text-gray-900 text-lg py-2 font-semibold">Completed: 2024</p>
            </div>
          </div>

          {/* Plus Two Education */}
          <div className="bg-white flex flex-col md:flex-row items-center space-x-0 md:space-x-6 transition-all duration-700 py-6 rounded-lg ">
            <FaSchool className="w-12 h-12 text-purple-500 mb-4 md:mb-0 md:ms-2" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-red-700">Plus Two (12th Grade)</h3>
              <p className="text-gray-900 mt-2 text-xl font-semibold">C.Kesavan Memorial Higher Secondary School</p>
              <p className="text-gray-900 mt-2 text-lg font-semibold">
                Focused on the Science stream, with subjects such as Mathematics, Physics, and Bio-Science. ((plus two))
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
