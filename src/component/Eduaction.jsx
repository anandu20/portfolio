// import React, { useEffect, useState } from 'react';
// import { FaSchool, FaGraduationCap, FaCode } from 'react-icons/fa'; // You can use icons for a more visually appealing layout
// import "./animation.css"; // If you want to add any animation or custom styles

// const Education = () => {
//   // State to handle the fade-in effect
//   const [fadeIn, setFadeIn] = useState(false);

//   // Trigger fade-in effect when component mounts
//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   return (
//     <section
//       id="education"
//       className={`py-18  pb-20 bg-gradient-to-r from-slate-900 to-slate-600 text-white ${fadeIn ? 'fade-in' : ''}`}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center text-white mb-10 pt-20  font-serif ">Education</h2>
        
//         <div className="space-y-12">
//           {/* MERN Stack Course */}
//           <div className="flex items-center space-x-6">
//             <FaCode className="w-12 h-12 text-yellow-500 mb-24" />
//             <div>
//               <h3 className="text-2xl font-semibold text-white">MERN Stack Developer Course</h3>
//               <p className="text-gray-300 mt-2 text-lg ">A comprehensive course covering MongoDB, Express.js, React.js, and Node.js. Focused on building full-stack web applications with responsive UIs and RESTful APIs.</p>
//               <p className=" text-gray-200 text-lg py-2 ">Completed: 2024</p>

//             </div>
//           </div >

//           {/* Bachelor's Degree */}
//           <div className="flex items-center space-x-6">
//             <FaGraduationCap className="w-12 h-12 text-blue-500 mb-22 " />
//             <div>
//               <h3 className="text-2xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
//               <p className="text-gray-300 mt-2 text-lg ">Mahatma Gandhi University</p>
//               <p className=" text-gray-200 text-lg py-2">Completed: 2024</p>
//             </div>
//           </div>

//           {/* Plus Two Education */}
//           <div className="flex items-center space-x-6">
//             <FaSchool className="w-12 h-12 text-purple-500 mb-20" />
//             <div>
//               <h3 className="text-2xl font-semibold text-white">Plus Two (12th Grade)</h3>
//               <p className="text-gray-300 mt-2 text-lg ">C.Kesavan Memorial Higher Secondary School</p>
//               <p className="text-gray-200 text-lg py-2">Completed: 2020</p>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
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
      className={`py-18 pb-20 bg-gradient-to-r from-slate-900 to-slate-600 text-white ${fadeIn ? 'fade-in' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10 pt-20 font-serif">Education</h2>

        <div className="space-y-12">
          {/* MERN Stack Course */}
          <div className="flex items-center space-x-6 transition-all duration-700">
            <FaCode className="w-12 h-12 text-yellow-500" />
            <div>
              <h3 className="text-2xl font-semibold text-white">MERN Stack Developer Course</h3>
              <p className="text-gray-300 mt-2 text-lg">A comprehensive course covering MongoDB, Express.js, React.js, and Node.js. Focused on building full-stack web applications with responsive UIs and RESTful APIs.</p>
              <p className="text-gray-200 text-lg py-2">Completed: 2024</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="flex items-center space-x-6 transition-all duration-700">
            <FaGraduationCap className="w-12 h-12 text-blue-500" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-gray-300 mt-2 text-lg">Mahatma Gandhi University</p>
              <p className="text-gray-200 text-lg py-2">Completed: 2024</p>
            </div>
          </div>

          {/* Plus Two Education */}
          <div className="flex items-center space-x-6 transition-all duration-700">
            <FaSchool className="w-12 h-12 text-purple-500" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Plus Two (12th Grade)</h3>
              <p className="text-gray-300 mt-2 text-lg">C.Kesavan Memorial Higher Secondary School</p>
              <p className="text-gray-200 text-lg py-2">Completed: 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
