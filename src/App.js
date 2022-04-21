import React from 'react';
import Nav from './components/Nav/nav.js';
import Header from './components/Header/header.js';
import DarkModeSwitch from './components/DarkModeSwitch/darkmodeswitch.js';
// import Projects from './components/Projects';
//import About from './components/About';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <DarkModeSwitch/>

    </div>
  );
}

export default App;
