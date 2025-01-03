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
        "Engineered custom demos using HTML, CSS, JavaScript, and React to create interactive, visually engaging presentations, developing reusable components that reduced demo creation time by 30% and increased business client inquiries by 40%",
        "Integrated both RESTful and GraphQL APIs to showcase the flexibility and power of the headless CMS, exhibiting advanced capabilities in real-time applications",
        "Refined the codebase by implementing Jest tests and automated CI/CD pipelines, while building responsive layouts with Tailwind CSS to showcase seamless content delivery across devices, improving demo loading speed by 25%"
      ]
      },
    {
      title: "Software Engineer Fellowship",
      company: "Headstarter AI",
      duration: "Jul 2024 - Sep 2024",
      responsibilities: [
        "Build five AI projects and collaborate with a team of 3 to transform a startup's backlog into functional solutions that meet business requirements",
        "Participate in weekend hackathons and gain insights from CEOs of YC startups and senior software engineers at leading tech companies"
      ]
    },
    {
      title: "Software Developer",
      company: "Stevens Blueprint",
      duration: "Dec 2023 - Present",
      responsibilities: [
        "Leading a team of 5 student designers and engineers on pro-bono projects to create new brands, design systems, and websites for InReach.org. Implementing a CMS using Next.js, React, TinaCMS, enabling non-technical users to add, modify, and remove website content easily",
        "Directing the design and improvement of responsive user interfaces, utilizing HTML, Tailwind CSS, and React, attracting over 25,000 visitors and more than 31,000 page-views"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Inchtone Global",
      duration: "Jan 2024 - Apr 2024",
      responsibilities: [
        "Developed an intuitive user interface using React and introduced new user registration APIs, implementing new registration APIs that streamlined the sign-up process and cut user drop-off rates by 60% through effective RESTful services with Node.js and Express.js",
        "Optimized database schemas and queries to improve user registration response times by 50%, achieved by refining MongoDB document structures and using efficient indexing",
        "Implemented a payment gateway using Stripe.js, enabling secure and hassle-free transactions for users, resulting in a 30% reduction in user drop-off rates",
        "Built a support chatbot using React and Express.js, utilizing PyTorch to train an NLP model that automates responses to common user queries, reducing support tickets by 25% and accomplishing 80% user satisfaction rate"
      ]
    },
    {
      title: "Undergraduate Research Assistant",
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
    </section>
  );
}

export default Experience;
