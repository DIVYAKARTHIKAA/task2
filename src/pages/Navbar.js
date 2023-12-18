import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const WelcomePopup = ({ onClose, email }) => {
  return (
    <div className="welcome-popup">
      <h3>Welcome!</h3>
      <p>Thank you for subscribing, {email}!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Navbar = () => {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setShowWelcomePopup(true);
  };

  const closeWelcomePopup = () => {
    setShowWelcomePopup(false);
    setEmail('');
  };

  return (
    <div className="hero">
      <nav>
        <h2 className="logo">Port<span>folio</span></h2>

        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="btn" onClick={() => setShowWelcomePopup(true)}>Subscribe</button>
        
        
        <a
          href="https://drive.google.com/file/d/1Si8Y4-t6ryazTYvwqBlFMPm2DPoBdeTJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          download="YourResume.pdf"
        >
          Resume
        </a>
      </nav>
      <img src="/images/girl.jpeg" alt="Your Image" className="right-corner-image" />
      <div className="content">
        <h4>Hello, my name is</h4>
        <h1>Divya <span>Karthikaa</span></h1>
        <h3>I'm a Web Developer</h3>
        <div className="newslatter">
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              id="mail"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" name="submit" value="Lets Start" />
          </form>
        </div>
      </div>

      {showWelcomePopup && <WelcomePopup onClose={closeWelcomePopup} email={email} />}
    </div>
  );
};

export default Navbar;
