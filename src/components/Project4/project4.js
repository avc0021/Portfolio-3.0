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

export default function Project4() {
  return (
    <Stack p={5}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={10}
        overflow={"hidden"}
      >
        <Box h={"140px"} bg={"gray.100"} mt={-6} mb={90} pos={"relative"}>
          <Image
            src={
              "https://github.com/jessebubble/parachute-play/raw/main/client/src/components/images/screenshot2.png"
            }
          />
        </Box>
        <Stack mt={3}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Parachute Play
          </Heading>
          <Text color={"gray.500"}>
            J.A.M. developed a word game built using the MERN stack, styling
            with Chakra-UI and Figma
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
              window.open("https://jam-group-project.herokuapp.com/")
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
              window.open("https://github.com/jessebubble/parachute-play")
            }
          >
            Github
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
