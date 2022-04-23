import React from "react";
//import DarkModeSwitch from './components/DarkModeSwitch/darkmodeswitch.js';
//import Hamburger from './components/Hamburger/hamburger.js'
import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Stack, Heading, Box, Spacer } from "@chakra-ui/layout";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
//import './Nav.css';
import './Nav.css';


function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
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
        <Box>
        <div className="navlinks">
        <MobileNavigation />
            <Navigation />
            </div>
            </Box>
      </Flex>
    </Stack>

  );
}

export default Nav;
