import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/personal.css';
import '../../styles/hobbies.css';

function Hobbies() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'personal' ? 'personal-theme' : ''}>
      <section>
        <div className='hobbies-title'>Hobbies</div>
        <h2 className='sub-title'>I love taking photos</h2>
      </section>
    </div>
  );
}

export default Hobbies;
