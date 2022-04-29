import React from "react";
import { VStack, Link, Box, Text } from '@chakra-ui/layout';
import { Button } from "@chakra-ui/react";

function Resume() {
  return (
    <VStack direction={['column', 'row']} spacing='24px'>
      <Box>
      <Text
          fontSize="3xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
        >
          About Me
        </Text>
        <Text mt='3' mb='3' >
            <Link onClick={() => window.open("https://docs.google.com/document/d/1vQMCjw9w_M-rwZhCUCfPWKmV6hYcc5ucvww9RfUCYZ4/edit?usp=sharing")}> Download Resume </Link>
            </Text>

       
        <h2 className="resume">Front-End Proficiences</h2>
          <div className="front">
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
            <ul>jQuery</ul>
            <ul>React</ul>
            <ul>Bootstrap</ul>
            <ul>Bulma</ul>
          </div>
        <h2 className="resume">Back-End Proficiences</h2>
          <div className="back">
            <ul>APIs</ul>
            <ul>Node</ul>
            <ul>Express</ul>
            <ul>MySql, Sequelize</ul>
            <ul>MonogoDB, Mongoose</ul>
            <ul>REST</ul>
          </div>
        <h2 className="resume">Other Proficiences</h2>
          <div className="other">
            <ul>Gitbash</ul>
            <ul>Heroku</ul>
            <ul>Github</ul>
          </div>
      </Box>
    </VStack>
  );
}

export default Resume;
