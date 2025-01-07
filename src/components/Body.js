import React, {useEffect} from 'react';
import { useTheme } from './ThemeContext';
import Education from '../pages/professional/Education';
import Experience from '../pages/professional/Experience';
import Projects from '../pages/professional/Projects';
import Skills from '../pages/professional/Skills';
import Hobbies from '../pages/personal/Hobbies';
import Memories from '../pages/personal/Memories';
import Aboutme from '../pages/personal/Aboutme';
import professionalImage from '../assets/professional copy.png';
import personalImage from '../assets/personal copy.png';
import '../styles/body.css';
import Contactme from '../pages/professional/Contactme';


function Body() {
  const { theme, setTheme } = useTheme();
  const themeClass = theme === 'professional' ? 'professional-theme' : 'personal-theme';


  return (
    <div className={`body ${themeClass}` }>
      <div className="body-content">
        <p className="intro">Hello there, my name is</p>
        <h1>Johan Nguyen</h1>
        <p><span className="hi">You want to know me...</span></p>
        <div>
          <button className="bt1" onClick={() => setTheme('professional')}>Professionally</button>
          <button className="bt2" onClick={() => setTheme('personal')}>Personally</button>
        </div>
      </div>
      <div className="body-image">
        {/* {theme === 'professional' ? (
          <img src={professionalImage} alt="Professional view" />
        ) : (
          <img src={personalImage} alt="Personal view" />
        )} */}
      </div>
      <div className="body-details">
        {theme === 'professional' ? (
          <>
            <Education />
            <Experience />
            <Projects />
            {/* <Contactme /> */}
            <Skills />
          </>
        ) : (
          <>
            <Aboutme />
            {/* <Hobbies /> */}
            <Memories />
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
