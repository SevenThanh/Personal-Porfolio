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
      title: "Fullstack Developer Intern",
      company: "Contentstack",
      duration: "Sep 2024 - Nov 2024",
      responsibilities: [
        "..."
      ]
      },
    {
      title: "Software Engineer Fellowship",
      company: "Headstarter AI",
      duration: "Jul 2024 - Present",
      responsibilities: [
        "Build five AI projects and collaborate with a team of 3 to transform a startup's backlog into functional solutions that meet business requirements",
        "Participate in weekend hackathons and gain insights from CEOs of YC startups and senior software engineers at leading tech companies"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Inchtone Global",
      duration: "Jan 2024 - May 2024",
      responsibilities: [
        "Developed and integrated new user registration APIs to streamline sign-up processes, achieving a 30% decrease in user dropout rates during sign-up, accomplished by designing RESTful services with Node.js and Express.js that interfaced with MongoDB",
        "Optimized database schemas and queries for user registration to improve response times by 50%, accomplished through refining MongoDB document structures and employing efficient indexing strategies"
      ]
    },
    {
      title: "Software Developer",
      company: "Stevens Blueprint",
      duration: "Dec 2023 - Present",
      responsibilities: [
        "Collaborating with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for InReach.org",
        "Leading the design and enhancement of responsive user interfaces, utilizing HTML, Tailwind CSS, and React. Attracting over 10,000 visitors and generating more than 21,000 page-views"
      ]
    },
    {
      title: "Research Assistant",
      company: "Stevens Institute of Technology",
      duration: "Oct 2023 - Mar 2024",
      responsibilities: [
        "Worked alongside PhD students to develop a multi-sensor wearable system, featuring personalized AI and multimodal biofeedback, designed to enhance the movements of older adults at home",
        "Executed data processing tasks including cleaning and formatting with Python, and utilized SciPy, Numpy, Pandas for mathematical computation",
        "Employed packages such as Keras to implement machine learning methods which improved in 40% accuracy"
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
