import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import '../../styles/professional.css';
import '../../styles/projects.css';

const ProjectData = [
  {
  id: 1,
  title: "Code With Ducks",
  description: "A program that teaches programmingm, machine learning, and artifical intelligence to high school students, especially females and underepresented minorities.",
  img: '/cwd.png',
  tags: ['React', 'JSX', 'CSS'],
  source: 'https://github.com/SevenThanh/Code-With-Ducks'
  },
  {
  id: 2,
  title: 'EngBot',
  description: "A platform that uses AI to provide English lessons tailored to the user's background and experience. For example, ",
  img: '/Engbot copy.png',
  tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  source: 'https://github.com/SevenThanh/EngBot',
  visit: ''
  },
  {
  id: 3, 
  title: 'LoginAndTalk',
  description: "A super fast, modern real-time chat application featuring advanced functionalities including light/dark mode, notification sounds, satisfying typing effects, responsive UI design and many more.",
  img: '/loginandtalk.png',
  tags: ['React', 'Typescript', 'Tailwind CSS', 'Next.js', 'Redis'],
  source: 'https://github.com/SevenThanh/LoginAndTalk',
  visit: ''
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
                <h4>{project.tags.join(', ')}</h4>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


export default Projects;
