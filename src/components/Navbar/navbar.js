import { IconButton } from "@chakra-ui/button";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Box, Spacer } from "@chakra-ui/layout";
//import { textDecoration } from "@chakra-ui/react";

function Navbar({ currentPage, handlePageChange }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack class="navbar">
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        w="100%"
        mb={4}
        p={4}
        pb="10px"
        backgroundColor="#344c5c"
        color={"white"}
      >

        {/* Dark Mode Switch */}
        <Box mt={1} ml={3} mb={3}>
          <IconButton
            bgGradient={"linear(to-r, cyan.500, blue.500)"}
            colorScheme="black"
            rounded="xl"
            boxSize="35px"
            isRound="true"
            icon={isDark ? <ImSun /> : <BsMoonStars />}
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
        
        <Spacer></Spacer>
        <Box p="2" _hover={{ textDecoration: "underline" }}>
          <a href="#about" onClick={() => handlePageChange("About")}>
            About
          </a>
        </Box>
        <Box p="2" _hover={{ textDecoration: "underline" }}>
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </Box>
        <Box p="2" _hover={{ textDecoration: "underline" }}>
          <a href="#projects" onClick={() => handlePageChange("Projects")}>
            Projects
          </a>
        </Box>
        <Box p="2" _hover={{ textDecoration: "underline" }}>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Navbar;
