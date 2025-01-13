import { useTheme } from '../../components/ThemeContext';
import '../../styles/personal.css';
import '../../styles/hobbies.css';
import one_x from '../../assets/one_x.png';
import two_x from '../../assets/two_x.png';
import three_y from '../../assets/three_y.png';
import one_y from '../../assets/one_y.png';
import two_y from '../../assets/two_y.png';
import four_y from '../../assets/four_y.png';
import React from 'react';

const images = [one_y, one_x, two_y, three_y, two_x, four_y];

function Hobbies() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'personal' ? 'personal-theme' : ''}>
      <div className='hobbies-title'>2. Hobbies</div>
      <section className='photo-section'>
        <h2 className='photo-title'>Some of the photos I took with my iPhone</h2>
        <div className='photo-container'>
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              className={index}
              alt={`Photo ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hobbies;