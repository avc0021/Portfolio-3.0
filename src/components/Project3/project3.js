import React from "react";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Link,
  Heading,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import BudgetTracker from "../../assets/images/btracker.png";

export default function Project3() {
  return (
    <Stack p={5}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"#344c5c"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={10}
        overflow={"hidden"}
      >
        <Box h={"140px"} bg={"gray.100"} mt={-6} mb={90} pos={"relative"}>
          <img src={BudgetTracker} alt="My Night Sky" />
        </Box>
        <Stack mt={3}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Budget Tracker
          </Heading>
          <Text color={"gray.500"}>
            This app allows the user to track withdrawals and deposits
            with or without data/internet connection. This will allow the user
            to accurately balance account.
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
              window.open("https://stormy-headland-24832.herokuapp.com/")
            }
          >
            Demo
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
              window.open("https://github.com/avc0021/Budget-Tracker")
            }
          >
            Github
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
