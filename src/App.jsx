// src/App.js
import React from 'react';
import Navbar from './component/Navbar';
import AboutMe from './component/AboutMe';
import Skill from './component/Skill';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Education from './component/Eduaction';


const App = () => {
  return (
    <div>
      <Navbar />
        <AboutMe />
        <Skill />
        <Projects />
        <Education/>
        <Contact/>
        <Footer/>

    </div>
  );
};

export default App;
