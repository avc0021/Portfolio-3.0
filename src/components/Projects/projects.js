import React from 'react';
import Project1 from '../Project1/project1.js'
import Project2 from '../Project2/project2.js'
import Project3 from '../Project3/project3.js'
import Project4 from '../Project4/project4.js'
//import Project5 from '../Project5'
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
      <Flex  mt={8} direction={"column"} spacing={4}      
>
              <Box >
              <Project1 />
              </Box>
              <Box>
              <Project2/>
              </Box>
              <Box>
              <Project3/>
              </Box>
              <Box>
              <Project4/>
              </Box>
      </Flex>
      </VStack>
    )
  }
  
export default Projects;