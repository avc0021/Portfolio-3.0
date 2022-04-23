import { ClassName } from "./Nav.css";
import "./Nav.css";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <Flex>
      <div className="navlinks">
        <ul>
          <li>
            <a href="/"> Home</a>
          </li>

          <li>
            <a href="/#about"> About</a>
          </li>

          <li>
            <a href="/#resume"> Resume</a>
          </li>

          <li>
            <a href="/#resume"> Resume</a>
          </li>
        </ul>
      </div>
    </Flex>
  );
};

export default NavLinks;
