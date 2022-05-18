import React, { useState } from "react";
import Navbar from "./components/Navbar/navbar.js";
import Projects from "./components/Projects/projects.js";
import About from "./components/About/about.js";
import Resume from "./components/Resume/resume.js";
import Contact from "./components/Contact/contact.js";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
