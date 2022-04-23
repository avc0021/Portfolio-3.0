import React from "react";
//import DarkModeSwitch from './components/DarkModeSwitch/darkmodeswitch.js';
//import Hamburger from './components/Hamburger/hamburger.js'
import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, HStack, Heading, Box, Spacer } from "@chakra-ui/layout";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import './Nav.css';


function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <HStack p={5}>
      <Flex w="100%">
        <Box w="500px">
          <Heading
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.600, blue.700)"
            bgClip="text"
          >
            Adam Castro
          </Heading>
        </Box>
        <Spacer />
        <Box w="70px">
          <IconButton
            ml={600}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Box>
        <Spacer />
        <MobileNavigation />
            <Navigation />
      </Flex>
    </HStack>

  );
}

export default Nav;
