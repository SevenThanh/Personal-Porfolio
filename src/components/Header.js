import React from 'react';
import { useTheme } from './ThemeContext';
import '../styles/header.css'

function Header() {
  const { theme } = useTheme();
  const themeClass = theme === 'professional' ? 'professional-theme' : 'personal-theme';
  
  return (
    <header className={`header ${themeClass}`}>
      <div className="container">
        <nav>
          <ul>
            <li>
              <button 
                onClick={() => window.open('./Johan_Nguyen_Resume.pdf', '_blank', 'noopener,noreferrer')}
              >
                Resume
              </button>
            </li>
            <li>
              <button 
                onClick={() => window.location.href = 'mailto:johannsevenn@gmail.com'}
              >
                Contact
              </button>
            </li>
            <li>
              <button 
                onClick={() => window.open('https://github.com/SevenThanh', '_blank', 'noopener,noreferrer')}
              >
                Github
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

