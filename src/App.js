import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './Main';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Project from './pages/Project';



function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/skills' element={<Skills/>} />
          
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
