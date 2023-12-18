import React from 'react';
import '../Project.css';

const Project = () => {
  const projects = [
    {
      title: 'SAILING THE GLOBE',
      description: 'Sailing the globe is a travel app for add, edit and view travel details.',
      images: ['/images/pro1.png', '/images/pro11.png', '/images/pro111.png'],
      
      gitLink: 'https://github.com/DIVYAKARTHIKAA/fullstack-react-springboot',
    },
    {
      title: 'MEDILOGIX',
      description: 'Medilogix focuses on  maintaining doctor,patient details,update appointments,update medical record.',
      images: ['/images/pro2.png', '/images/pro22.png', '/images/pro222.png','/images/pro2222.png','/images/pro22222.png','/images/pro222222.png'],
      projectLink: 'https://screenpal.com/watch/c0lbbFVHfaa',
      gitLink: 'https://github.com/DIVYAKARTHIKAA/App-Development',
    },
  ];

  const handleGitLinkClick = (gitLink) => {
    window.open(gitLink, '_blank');
  };

  return (
    <div className="project-page">
      <h2>Recent Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <button onClick={() => handleGitLinkClick(project.gitLink)}>
                  GitHub
                </button>
                {project.projectLink && (
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    Project Link
                  </a>
                )}
              </div>
            </div>
            {project.images.map((image, imgIndex) => (
              <a key={imgIndex} href={image} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={project.title} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
