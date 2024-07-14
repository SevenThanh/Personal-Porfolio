import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/aboutme.css';
import meAndMom from '../../assets/me and mom copy.png';

function Aboutme() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'personal' ? 'personal-theme' : ''}>
      <section className='aboutme-section'>
        <h2 className='about-personal-title'>1. About me :3</h2>
        <div className='about-personal-container'>
          <div className='about-personal-text'>
            <p>
              Born in a small, rural town surrounded by farms in Vietnam, one day when I was 12, my mom asked if I wanted to come to America with her. Guess what I said?
            </p>
          </div>
          <div className='about-personal-image'>
            <img src={meAndMom} alt="My mom and I at my middle school graduation" className="profile-image" />
            <p className='image-description'>My mom and I at my middle school graduation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
