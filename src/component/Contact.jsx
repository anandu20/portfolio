import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContactAni.css'; // Ensure you are using the custom CSS file for animations

const Contact = () => {
  return (
    <section id="contact" className="py-12   bg-gradient-to-r from-slate-900 to-slate-500 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 animate-fade-in font-serif pt-6">
          Contact Me
        </h2>

        <div className="space-y-8 ">
          {/* Contact Info - Email */}
          <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up-fade ">
            <FaEnvelope className="w-10 h-10 text-red-600 transform transition duration-300 hover:rotate-12" />
            <div>
              <strong className="text-xl text-gray-800 font-semibold">Email:</strong>
              <p className="text-blue-600">
                <a href="mailto:ananduramachandran411@gmail.com" className="hover:underline text-lg">ananduramachandran411@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Contact Info - Phone */}
          <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up-fade">
            <FaPhone className="w-10 h-10 text-blue-600 transform transition duration-300 hover:rotate-12" />
            <div>
              <strong className="text-xl text-gray-800 font-semibold">Phone:</strong>
              <p className="text-blue-600">
                <a href="tel:+918289932788" className="hover:underline text-lg">8289932788</a>
              </p>
            </div>
          </div>

          {/* Contact Info - GitHub */}
          <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up-fade">
            <FaGithub className="w-10 h-10 text-gray-800 transform transition duration-300 hover:rotate-12" />
            <div>
              <strong className="text-xl text-gray-800 font-semibold">GitHub:</strong>
              <p className="text-gray-800">
                <a href="https://github.com/anandu20" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg  text-blue-700">anandu20</a>
              </p>
            </div>
          </div>

          {/* Contact Info - LinkedIn */}
          <div className="flex items-center space-x-6 bg-white p-2 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up-fade">
            <FaLinkedin className="w-10 h-10 text-blue-700 transform transition duration-300 hover:rotate-12" />
            <div>
              <strong className="text-xl text-gray-800 font-semibold">LinkedIn:</strong>
              <p className="text-blue-700">
                <a href="https://www.linkedin.com/in/ananduramachandran2001" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">ananduramachandran2001</a>
              </p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
