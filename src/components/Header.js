import React from 'react';
import { useTheme } from './ThemeContext';
import '../styles/header.css'

function Header() {
  const { theme } = useTheme();
  const themeClass = theme === 'professional' ? 'professional-theme' : 'personal-theme';
  
  return (
    <header className={`header ${themeClass}`}>
      <div className="logo">Johan</div>
      <div className="container">
        <nav>
          <ul>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

