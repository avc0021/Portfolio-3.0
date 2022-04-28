import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props,{ currentPage, handlePageChange }) {
  
  return (
    <NavLinksContainer>
      <LinksWrapper>
      <LinkItem>
          <Link to="#home">Home</Link>
        </LinkItem>
        <LinkItem
        href="#about"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        About Me
      </LinkItem>
        <LinkItem>
          <Link href="#resume">Resume</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#projects">Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#contact">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}