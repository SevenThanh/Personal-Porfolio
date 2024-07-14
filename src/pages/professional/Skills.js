import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/professional.css';

function Skills() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'professional' ? 'professional-theme' : ''}>
      {/* <h2>Skills</h2>
      <ul>
        <li>Programming Languages: Python, Java, C++, JavaScript</li>
        <li>Web Technologies: React, Node.js, Express.js, MongoDB</li>
      </ul> */}
    </div>
  );
}

export default Skills;
