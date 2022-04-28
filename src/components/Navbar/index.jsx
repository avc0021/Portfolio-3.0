import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";

function Navbar({ currentPage, handlePageChange }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <section className="nav nav-tabs">
      <div className="navbar-item">
      <a
        href="#about"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        About Me
      </a>
      </div>
      <div className="navbar-item">
      <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>
      </div>
      <div className="navbar-item">
      <a
        href="#projects"
        onClick={() => handlePageChange("Projects")}
        className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
      >
        Projects
      </a>
      </div>
      <div className="navbar-item">
      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact Info
      </a>
      </div>
      <IconButton
          colorScheme="teal"
          variant="outline"
          ml={8}
          boxSize="47px"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
    </section>

  );
}

export default Navbar;

