import { Flex, Box } from "@chakra-ui/layout";
//import AdamLogo from "../../assets/images/"
import { Image } from "@chakra-ui/image";
import { Center } from "@chakra-ui/react";

function Logo() {
  // const { colorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  return (
    <Flex mt={8} direction={"column"} spacing={4}> 
      <Box>
        <Center>
          <Image
            height={"6vh"}
            mb={"80px"}
            alignSelf="center"
            src={
              "https://see.fontimg.com/api/renderfont4/nRGPV/eyJyIjoiZnMiLCJoIjoxMDgsInciOjE1MDAsImZzIjo3MiwiZmdjIjoiIzNGOEVDMSIsImJnYyI6IiNEOEQ4REEiLCJ0IjoxfQ/QWRhbSBDYXN0cm8/bontang.png"
            }
            alt="profile pic adam"
            onClick={() => window.open("https://github.com/avc0021")}
          />
        </Center>
      </Box>
    </Flex>
  );
}

export default Logo;
