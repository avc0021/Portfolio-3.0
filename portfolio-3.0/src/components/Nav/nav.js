import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons"
//import { Image } from "@chakra-ui/image";
//import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem  command="About">
              <Link to="/about"> About </Link>
            </MenuItem>
            <MenuItem command="Projects">
              <Link to="/projects"> Projects </Link>
            </MenuItem>
            <MenuItem command="Resume">
              <Link to="/resume"> Resume </Link>
            </MenuItem>
            <MenuItem command="Contact">
              <Link to="/contact"> Contact </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Spacer></Spacer>
        <IconButton
          colorScheme="teal"
          variant="outline"
          ml={8}
          boxSize="47px"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        
      </Flex>
    </VStack>
  );
}


export default Nav;
