import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Box, Spacer } from "@chakra-ui/layout";

function Navbar({ currentPage, handlePageChange }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Flex
        align="center"
        justify="right"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500"]}
      >
        <Spacer></Spacer>
        <Box p="2">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </Box>
        <Box p="2">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </Box>
        <Box p="2">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </Box>
        <Box p="2">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </Box>
      </Flex>
      <IconButton
        colorScheme="teal"
        variant="outline"
        ml={8}
        boxSize="47px"
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </VStack>
  );
}

export default Navbar;
