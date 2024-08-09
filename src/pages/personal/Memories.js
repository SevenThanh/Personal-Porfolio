import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/personal.css';

function Memories() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'personal' ? 'personal-theme' : ''}>
      {/* <h2>Memories</h2>
      <p></p> */}
    </div>
  );
}

export default Memories;
