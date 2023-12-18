import React from 'react';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Service />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Main;
