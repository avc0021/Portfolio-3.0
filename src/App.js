import React from "react";
import  { Navbar } from "./components/Navbar";
//import Header from "./components/Header/header.js";
// import Projects from './components/Projects';
import About from "./components/About/about.js";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import Resume from "./components/Resume/resume.js";
import DarkModeSwitch from "./components/DarkModeSwitch/darkmodeswitch.js";
// import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  // const [currentPage, setCurrentPage] = useState('About');
  // const renderPage =() => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  // }
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
<>
        <Navbar />
        <Router>
                <Switch>
                    <Route exact path="/About" 
                        component={About} />
  
                    <Route exact path="/Resume" 
                        component={Resume} />
                </Switch>
            </Router>
</>

  );
}

export default App;
