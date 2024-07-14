import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/professional.css';
import '../../styles/projects.css'



const ProjectData = [
  {
    id: 1,
    title: "Code With Ducks",
    description:"Leading a team of five to develop a full-stack application that teaches programming to young students, instructed by Stevens students",
    img: '/CWD2 copy.png',
    tags: ['React'],
    source: 'https://github.com'
  },
  {
    id: 2,
    title: 'EngBot',
    description: "Engbot provides English lessons tailored to the user's background and experience. For instance, a high school student will receive lessons on topics like making friends, asking to use the bathroom, and requesting homework extensions. After each lesson, learners can immediately apply what they've learned to their daily lives. ",
    img: '/Engbot copy.png',
    tags: ['React', 'TailwindCSS'],
    source: 'https://github.com',
    visit: 'https://yoursite.com'
  }
];


function Projects() {
  const { theme } = useTheme();
  return (
    <section className='project-section'>
      <div className={theme === 'professional' ? 'professional-theme' : ''}>
        <h2>2. Projects</h2>
        <ol>
          {ProjectData.map((project) => (
            <li key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{`${project.id}. ${project.title}`}</h3> 
                <p>{project.description}</p>
                <a href={project.source}>View Code</a>
                {/* {project.visit && <a href={project.visit}>Visit Site</a>} */}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


export default Projects;