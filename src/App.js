import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Arrow from './components/Arrow'; 
import './App.css';

function App() {
  return (
    <Router basename="/"> 
      <div className="App dark bg-gray-900 text-white">
        <Navbar />
        <Skills />
        <About />
        <Projects />
        <Blog />
        <SocialMedia />
        <Footer />
        <Arrow />
      </div>
    </Router>
  );
}

export default App;
