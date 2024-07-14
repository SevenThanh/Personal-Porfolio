import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/professional.css';

function Education() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'professional' ? 'professional-theme' : ''}>
      {/* <h2>Education</h2>
      <p>Stevens Institute of Technology, BSc Computer Science, Expected 2026</p>
      <ul>
        <li>Dean's List every semester</li>
        <li>Minor in Mathematics</li>
      </ul> */}
    </div>
  );
}

export default Education;
