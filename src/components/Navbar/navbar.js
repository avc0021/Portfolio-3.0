import { IconButton } from "@chakra-ui/button";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs"
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Box, Spacer } from "@chakra-ui/layout";
//import { textDecoration } from "@chakra-ui/react";


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
        <Box p="2" _hover={{ textDecoration: "underline" }}>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </Box>
        <Box p="2" _hover={{ textDecoration: "underline" }}>
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
        <Box p="2" _hover={{ textDecoration: "underline" }}>
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
        <Box p="2" _hover={{ textDecoration: "underline" }}>
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
      <Box>
        <IconButton
          colorScheme="black"
          variant="outline"
          mb={18}
          boxSize="47px"
          icon={isDark ? <ImSun /> : <BsMoonStars />}
          isRound="true"
          
          onClick={toggleColorMode}
        ></IconButton>
      </Box>
    </VStack>
  );
}

export default Navbar;
