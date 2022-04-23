import { ClassNames } from "@emotion/react";
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
      <Menu>
        <MenuList>
          <div className="navlinks">
            <ul>
              <MenuItem>
                <li>
                  <a href="/"> Home</a>
                </li>
              </MenuItem>
              <MenuItem>
                <li>
                  <a href="/#about"> About</a>
                </li>
              </MenuItem>
              <MenuItem>
                <li>
                  <a href="/#resume"> Resume</a>
                </li>
              </MenuItem>
              <MenuItem>
                <li>
                  <a href="/#resume"> Resume</a>
                </li>
              </MenuItem>
            </ul>
          </div>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavLinks;
