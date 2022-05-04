import React from "react";
import { VStack, Link, Box, Text, Flex } from "@chakra-ui/layout";
import { RiExternalLinkLine } from "react-icons/ri";
import { Button } from "@chakra-ui/react";

function Resume() {
  return (
    <VStack>
      <Flex>
        <Box
          bg="#344c5c"
          color="white"
          borderRadius="lg"
          w={"full"}
          maxW={"445px"}
          p={70}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mb="5"
          >
            Resume
          </Text>
          <Text mt="30" mb="10">
            <Link
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1vQMCjw9w_M-rwZhCUCfPWKmV6hYcc5ucvww9RfUCYZ4/edit?usp=sharing"
                )
              }
            >
              <Button variant="solid" bg="#647D94" color="white" _hover={{}}>
                <RiExternalLinkLine size="21px" color="white" />{" "}
                <Text ml={"8px"}>Full Resume</Text>
              </Button>
            </Link>
          </Text>

          <Text fontWeight="bold" color="white" as="u">
            Front-End Proficiences
          </Text>

          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>JavaScript</ul>
          <ul>jQuery</ul>
          <ul>React</ul>
          <ul>Bootstrap</ul>
          <ul>Bulma</ul>
          <ul>Chakra</ul>

          <br></br>
          <Text fontWeight="bold" color="white" as="u">
            Back-End Proficiences
          </Text>

          <ul>APIs</ul>
          <ul>Node</ul>
          <ul>Express</ul>
          <ul>MySql, Sequelize</ul>
          <ul>MonogoDB, Mongoose</ul>
          <ul>REST</ul>
          <br></br>
          <Text fontWeight="bold" color="white" as="u">
            Tools
          </Text>

          <ul>Gitbash</ul>
          <ul>Heroku</ul>
          <ul>Github</ul>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Resume;
