import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/professional.css';
import '../../styles/experience.css';

function Experience() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const companyRefs = useRef([]);

  const experiences = [
    {
      title: "Software Engineer Fellowship",
      company: "Headstarter AI",
      duration: "July 2024 - August 2024",
      responsibilities: [
        "Building five AI projects and a final project that develops a startup's current backlog to meet business requirements"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Inchtone Global",
      duration: "Jan 2024 - May 2024",
      responsibilities: [
        "Developed and integrated new user registration APIs to streamline sign-up processes, achieving a 30% decrease in user dropout rates during sign-up, accomplished by designing RESTful services with Node.js and Express.js that interfaced with MongoDB",
        "Optimized database schemas and queries for user registration to improve response times by 30%, accomplished through refining MongoDB document structures and employing efficient indexing strategies"
      ]
    },
    {
      title: "Software Developer",
      company: "Stevens Blueprint",
      duration: "Dec 2023 - Present",
      responsibilities: [
        "Collaborating with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
        "Leading the design and implementation of responsive user interfaces utilizing HTML, Tailwind CSS, React"
      ]
    },
    {
      title: "Research Assistant",
      company: "Stevens Institute of Technology",
      duration: "Oct 2023 - Mar 2024",
      responsibilities: [
        "Execute data processing tasks including cleaning and formatting with Python",
        " Employ packages such as Keras to implement machine learning methods to increase accuracy",
        "Utilize Scipy, Numpy, Pandas for mathematical computation",
        "Responsible for the manual portion of the pre-processing for the research project"
      ]
    }
  ];

  useEffect(() => {
    const activeCompany = companyRefs.current[activeIndex];
    if (activeCompany) {
      const indicator = document.querySelector('.indicator');
      indicator.style.height = `${activeCompany.clientHeight}px`;
      indicator.style.top = `${activeCompany.offsetTop}px`;
    }
  }, [activeIndex]);

  return (
    <section className='experience-section'>
      <div className={`${theme === 'professional' ? 'professional-theme' : ''} experience-section`}>
        <h2 className="section-title">1. Professional Experience</h2>
        <div className="experience-container">
          <div className="company-bar">
            {experiences.map((experience, index) => (
              <div
                key={index}
                ref={el => companyRefs.current[index] = el}
                className={`company-name ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {experience.company}
              </div>
            ))}
            <div className="indicator"></div>
          </div>
          <div className="experience-details">
            <h3 className="job-title">{experiences[activeIndex].title}</h3>
            <p className="duration">{experiences[activeIndex].duration}</p>
            <ul className="responsibilities">
              {experiences[activeIndex].responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
