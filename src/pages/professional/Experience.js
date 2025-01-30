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
      title: "Technical Lead Software Developer",
      company: "Stevens Blueprint",
      duration: "Dec 2023 - Present",
      responsibilities: [
        "Led a team of student designers and engineers on pro-bono projects to create new brands, design systems, and websites for InReach.org. Implementing a CMS using Next.js, React, TinaCMS, enabling non-technical users to add, modify, and remove website content easily",
        "Directed the design and improvement of responsive user interfaces, utilizing HTML, Tailwind CSS, and React, attracting over 28,000 visitors and more than 34,000 page-views"
      ]
    },
    {
      title: "Fullstack Developer Intern",
      company: "Contentstack",
      duration: "Sep 2024 - Oct 2024",
      responsibilities: [
        "Engineered interactive demos with HTML, CSS, JavaScript, and React, creating reusable components that reduced demo creation time by 30% and increased client inquiries by 40%.",
        "Integrated RESTful and GraphQL APIs to showcase a headless CMS, enabling real-time features and refining the codebase with Jest tests and CI/CD pipelines, improving demo load speed by 25%."
      ]
      },
    {
      title: "Software Engineer Fellowship",
      company: "Headstarter AI",
      duration: "Jul 2024 - Sep 2024",
      responsibilities: [
        "Built AI projects and collaborate with a team of 3 to transform a startup's backlog into functional solutions that meet business requirements",
        "Participated in weekend hackathons and gain insights from CEOs of YC startups and senior software engineers at leading tech companies"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Inchtone Global",
      duration: "Jan 2024 - Apr 2024",
      responsibilities: [
        "Reduced user registration drop-offs by 60% by creating a streamlined React UI and Node.js/Express.js REST APIs. Improved registration response times by 50% through optimized MongoDB schemas and efficient indexing.",
        "Improved registration response times by *50%* through optimized *MongoDB* schemas and efficient indexing.",
        "Cut support tickets by 80% and maintained a 5-star rating by building a chatbot with React, Express.js, and a PyTorch NLP model."
      ]
    },
    {
      title: "Software/Machine Learning Engineer Intern",
      company: "Stevens Institute of Technology",
      duration: "Oct 2023 - Mar 2024",
      responsibilities: [
        "Worked alongside PhD students to develop a multi-sensor wearable system with personalized AI and multimodal biofeedback, designed to enhance the movements of older adults at home",
        "Executed data processing tasks including cleaning and formatting with Python, and utilized SciPy, Numpy, Pandas for mathematical computation. Employed Keras to implement machine learning methods which improved in 30% accuracy",
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
      <div id='line'> </div>
    </section>
  );
}

export default Experience;
