import React from 'react';

import '../Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-me">
    <h2>Contact Me</h2>
    
        <p>Let Me Get You A Beautiful Website.</p>
          <p>Let's Connect and Create Something Amazing!</p>
        <a className="button-two" href="/contact">
          Contact Me
        </a>
      

     
       
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
   </div>
  );
};

export default Contact;
