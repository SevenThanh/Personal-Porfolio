import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/personal.css';

function Hobbies() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'personal' ? 'personal-theme' : ''}>
      {/* <h2>Hobbies</h2>
      <ul>
        <li>Photography</li>
        <li>Gaming</li>
        <li>Cooking</li>
      </ul> */}
    </div>
  );
}

export default Hobbies;
