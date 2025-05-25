"use client";

import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface HeaderProps {
  title?: string;
}

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  position: relative;

  &:hover {
    color: #0070f3;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #0070f3;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header: FC<HeaderProps> = ({ title = "My Routine" }) => {
  return (
    <StyledHeader>
      <Container>
        <Logo href="/">{title}</Logo>
        <Nav>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/routines">Routines</NavLink>
          <NavLink href="/profile">Profile</NavLink>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
