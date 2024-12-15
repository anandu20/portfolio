// src/App.js
import React from 'react';
import Navbar from './component/Navbar';
import AboutMe from './component/AboutMe';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Education from './component/Eduaction';
import Skills from './component/Skill';


const App = () => {
  return (
    <div>
      <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
        <Education/>
        <Contact/>
        <Footer/>

    </div>
  );
};

export default App;
