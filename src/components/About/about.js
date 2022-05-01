import React from "react";
//import coverImage from "../../assets/ac1/aj.jpg";
import { VStack, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/react"
;
function About() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Container centerContent overflow="hidden">
      <Flex direction={"column"} >
        <Box p="20"           
          >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            About Me
          </Text>
          <Image
              ml={2}
              objectFit="cover"
              height={"40vh"}
              borderRadius="full"
              position="center"
              src="https://ca.slack-edge.com/T02GXRVP58D-U02HW6NHXTP-6f10994cffea-512"
              alt="profile pic adam"
              onClick={() => window.open("https://github.com/avc0021")}
            />
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
      </Container>
    </VStack>
  );
}

export default About;
