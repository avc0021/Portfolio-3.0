import React from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
//import { Button } from "@chakra-ui/react";
//import { Link } from "react-router-dom";


function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";



  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8"
          size="md"
          fontWeight="semibold"
          color="cyan.400"
        ></Heading>
        <IconButton colorScheme='teal' variant='outline'
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

export default DarkModeSwitch;