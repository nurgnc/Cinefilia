import React from 'react';
// components
import { ThemeButton, MoviesToggle, NavbarUserInfo } from '../index';
// css
import { ContainerFluid, Flex } from '../../styles/baseStyles';
import { Nav, Logo, StyledLink } from '../../styles/Navbar.styled';
// logo
import logo from '../../assets/img/logo.png';

function Navbar() {
  return (
    <ContainerFluid>
      <Nav>
        <>
          <StyledLink to="/">
            <Logo src={logo} alt="logo" />
          </StyledLink>
          <MoviesToggle />
        </>

        <Flex>
          <ThemeButton />
          <NavbarUserInfo />
        </Flex>
      </Nav>
    </ContainerFluid>
  );
}

export default Navbar;
