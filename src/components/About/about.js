import React from "react";
//import coverImage from "../../assets/ac1/aj.jpg";
import { VStack, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";


function About() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Flex spacing="200px" p={"0"} alignSelf="flex-start">
        <Box p='20'>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            About Me
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Full Stack Web Developer leveraging a background in biotechnology
            and music to build life-enhancing user experiences on mobile and web
            applications. Recently earned a Certificate in Full Stack Web
            Development from The University of Texas at San Antonio, with newly
            developed skills using MongoDB, Express.js, React.js, Node.js,
            JavaScript, CSS, Node.js, HTML, MySQL, Heroku, GitHub/Bash,
            object-oriented programming, and responsive web design. I’m excited
            to leverage my skills as part of a fast-paced, quality-driven team
            to build an impactful user experience on the web.
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default About;
