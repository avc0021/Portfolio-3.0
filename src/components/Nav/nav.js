import React from "react";
//import DarkModeSwitch from './components/DarkModeSwitch/darkmodeswitch.js';
//import Hamburger from './components/Hamburger/hamburger.js'
import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Box, Spacer } from "@chakra-ui/layout";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
      <Box w='500px'>
        <Heading
          fontSize="5xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.600, blue.700)"
          bgClip="text"
        >
          Adam Castro
        </Heading>
        </Box>
        <Spacer/>
        <Box w='70px'>
        <IconButton
          ml={600}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        </Box>
        <Spacer/>
        <Box w='500px'>
          <ul>
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/#about"> About</a>
            </li>
            <li>
              <a href="/#resume"> Resume</a>
            </li>
            <li>
              <a href="/#resume"> Resume</a>
            </li>
          </ul>
        </Box>

        
      </Flex>
    </VStack>
  );
}

export default Nav;
