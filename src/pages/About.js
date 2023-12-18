import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="main">
          <img src="/images/girl.jpeg" alt="Girl" />
          <div className="about-text">
            <h2>About Me</h2>
            <h5>Web Developer</h5>
            <p>
              I am an undergraduate student with a passion for web development. My journey in the world of coding began during my studies, and I have been dedicated to honing my skills ever since. I strive to provide clean code and create pixel-perfect designs. Additionally, I enjoy incorporating interactive web animations to enhance user experiences. My focus is on developing responsive designs that ensure accessibility for all users, regardless of their device.
            </p>
            
            <Link to="/contact">
              <button type="button">Let's Connect</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
