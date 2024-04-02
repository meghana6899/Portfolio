import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Project';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
