import React from 'react';
import Project1 from '../Project1/project1.js'
import Project2 from '../Project2/project2.js'
// import Project3 from '../Project3'
// import Project4 from '../Project4'
// import Project5 from '../Project5'
import {
  Box,
  Flex,
  VStack,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

function Projects () {

    return (
      <VStack>
      <Flex        
>
              <Box >
              <Project1 />
              </Box>
              <Box>
              <Project2/>
              </Box>
      </Flex>
      </VStack>
    )
  }
  
export default Projects;