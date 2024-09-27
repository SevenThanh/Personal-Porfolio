import React from 'react'
import '../../styles/contactme.css';

function Contactme() {
  return (
    <section className='contactme-section'>
        <div className="line"></div>
        <h1 className="title">Now what?</h1>
        <h2 className='sentence'>Let's get in touch :&#41;</h2>
          <ul className='list'>
            <li><a href="https://github.com/SevenThanh">Github</a></li>
            <li><a href="https://www.linkedin.com/in/johan-nguyen-seven">LinkedIn</a></li>
            <li><a href="mailto:johannsevenn@gmail">Email</a></li>
          </ul>

    </section>
  )
}

export default Contactme
