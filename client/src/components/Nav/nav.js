import React from "react";
import { Link } from "react-router-dom";

<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='About'>
    <Link to="/about"> About </Link>
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='Projects'>
    <Link to="/projects"> Projects </Link>
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='Resume'>
    <Link to="/resume"> Resume </Link>
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='Contact'>
    <Link to="/contact"> Contact </Link>
    </MenuItem>
  </MenuList>
</Menu>