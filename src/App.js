import React, { useState } from 'react';
import Nav from './components/Nav/Nav.js';
import Header from './components/Header/header.js';
// import Projects from './components/Projects';
import About from './components/About/about.js';
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import Resume from './components/Resume/resume.js';
// import Contact from './components/Contact';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {


  const [currentPage, setCurrentPage] = useState('About');
  const renderPage =() => {    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <VStack p={5}>
      <Flex w="100%">
      <Nav />
      </Flex>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </VStack>
  );
}

export default App;
