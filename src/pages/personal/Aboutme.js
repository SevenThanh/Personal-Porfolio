import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/aboutme.css';
import meAndMom from '../../assets/me and mom copy.png';
import professionalImage from '../../assets/personal copy.png';

function Aboutme() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'personal' ? 'personal-theme' : ''}>
      <section className='aboutme-section'>
        <h2 className='about-personal-title'>1. About me</h2>
        <div className='about-personal-container'>
          <div className='about-personal-text'>
            <ul>
              <li>🤔 At 13, my mom asked me if I wanted to come to America with her. Guess what I said?</li>
              <li>🏋 Every day around 4 pm, you'll find me either at the gym or on a basketball court (not 6ft and not even good T^T)</li>
              <li>🎶 Can't live without music though; I don't have a specific type; if it's good, it's good</li>
              <li>😗 Very friendly and chill person, so don't hesitate to reach out. I’m always down for whatever</li>
              <li>🌍 Love traveling to different places and experiencing new things. Life is too short; keep an open mind so you don't waste it</li>
              <li>💙 Whoever's reading this, remember to always be kind and love yourself</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
