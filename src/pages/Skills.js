import React from 'react';
import '../Skills.css';

const Skills = () => {
  const skillsData = [
    { id: 'html', title: 'HTML', proficiency: 80, description: 'Building the structure of web pages.' },
    { id: 'css', title: 'CSS', proficiency: 60, description: 'Styling and designing web pages.' },
    { id: 'js', title: 'JavaScript', proficiency: 75, description: 'Adding interactivity and dynamic features.' },
    { id: 'sql', title: 'SQL', proficiency: 70, description: 'Managing and querying databases.' },
    { id: 'cloud-computing', title: 'Cloud Computing', proficiency: 85, description: 'Utilizing cloud platforms for scalable solutions.' },
    { id: 'java', title: 'Java', proficiency: 65, description: 'Building robust and scalable backend applications.' },
    { id: 'cpp', title: 'C++', proficiency: 50, description: 'High-performance and system-level programming.' },
  ];

  return (
    <div className="skills-container skills-container-dark">
      <h2 className="skills-heading">Skills</h2>
      <p className="skills-description">
        Below are some of the key skills I possess. Each progress bar represents my proficiency level in each skill.
      </p>

      <div className="skills">
        {skillsData.map((skill) => (
          <div className="skill" key={skill.id}>
            <div className="skill-info">
              <span className="title">{skill.title}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
              <span className="proficiency">{skill.proficiency}% Proficiency</span>
            </div>

            <p className="description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
