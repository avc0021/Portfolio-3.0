import React from "react";
import coverImage from "../../assets/images/bluelogo.png";
import { VStack, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Center } from "@chakra-ui/react";
//import Logo from "../Logo/logo.js";
function About() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex mt={8} direction={"column"} spacing={4}>
        <Box>
          <Center>
            <Image
              height={{ sm: 60, md:370, lg: 560 }}
              width={{ sm: 90, md:370, lg: 590 }}
              borderRadius="lg"
              mb={"80px"}
              align="center"
              src={coverImage}
              alt="profile pic adam"
              onClick={() => window.open("https://github.com/avc0021")}
            />
          </Center>
          <Box
            bg="#344c5c"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={10}
            boxShadow={"0px 12px 10px rgb(0 0 0 / 48%)"}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.500, blue.500)"
              bgClip="text"
              mb={"30px"}
            >
              About
            </Text>
            <Text color={isDark ? "gray.200" : "gray.400"}>
              Full Stack Web Developer leveraging a background in biotechnology
              and music to build life-enhancing user experiences on mobile and
              web applications. Recently earned a Certificate in Full Stack Web
              Development from The University of Texas at San Antonio, with
              newly developed skills using MongoDB, Express.js, React.js,
              Node.js, JavaScript, CSS, Node.js, HTML, MySQL, Heroku,
              GitHub/Bash, object-oriented programming, and responsive web
              design. I’m excited to leverage my skills as part of a fast-paced,
              quality-driven team to build an impactful user experience on the
              web.
            </Text>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
}

export default About;
