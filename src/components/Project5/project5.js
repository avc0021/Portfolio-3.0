import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { BsGithub, BsFilePlay } from "react-icons/bs";
import RunBuddy from "../../assets/images/runbuddy.png";

export default function Project2() {
  return (
    <Stack p={5}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"#344c5c"}
        boxShadow={
          "0px 12px 10px rgb(0 0 0 / 48%)"
        }
        rounded={"md"}
        p={10}
        overflow={"hidden"}
      >
        <Box h={"140px"} bg={"gray.100"} mt={-6} mb={90} pos={"relative"}>
          <img objectFit="cover" src={RunBuddy} alt="My Night Sky" />
        </Box>
        <Stack mt={3}>
          <Heading color="white" fontSize={"2xl"} fontFamily={"body"}>
            Run Buddy
          </Heading>
          <Text color={"gray.500"}>
          A mobile app that offers fitness training services.
          </Text>
        </Stack>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            onClick={() =>
              window.open("https://avc0021.github.io/Run-Buddy/")
            }
          >
            <BsFilePlay size="21px" color="white" />{" "}
            <Text ml={"8px"}>Deploy</Text>
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            onClick={() =>
              window.open("https://github.com/avc0021/Run-Buddy")
            }
          >
            <BsGithub size="20px" /> <Text ml={"10px"}>GitHub</Text>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}