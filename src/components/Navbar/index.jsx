import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
//import { Logo } from "../logo";

import { NavLinks } from "./navlinks";
import { DeviceSize } from "../Responsive";
import { MobileNavLinks } from "./mobilenavlinks";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";
const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props,{ currentPage, handlePageChange }) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <NavbarContainer>
      <LeftSection>{/* <Logo /> */}</LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      {/* <RightSection>{isMobile && <MobileNavLinks />}</RightSection> */}
      <IconButton
        colorScheme="teal"
        variant="outline"
        ml={8}
        boxSize="47px"
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </NavbarContainer>
  );
}
