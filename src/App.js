import React, { useState } from 'react';
import Navbar  from "./components/Navbar/navbar.js";
//import Header from "./components/Header/header.js";
import Projects from './components/Projects/projects.js';
import About from "./components/About/about.js";
import Home from "./components/Home/home.js";
//import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import Resume from "./components/Resume/resume.js";
//import DarkModeSwitch from "./components/DarkModeSwitch/darkmodeswitch.js";
import Contact from './components/Contact/contact.js';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {

    const [currentPage, setCurrentPage] = useState('About');
    const renderPage =() => {    
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
    }
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
      <div className="App">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
      </div>
  );
}

export default App;
