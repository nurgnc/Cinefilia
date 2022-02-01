import React from 'react';
// components
import { MoviesToggle, NavbarUserInfo } from '../index';
// css
import { ContainerFluid, Flex } from '../../styles/baseStyles';
import { Nav, StyledLink } from '../../styles/Navbar.styled';
// logo
import logo from '../../assets/img/logo.png';

function Navbar() {
  return (
    <ContainerFluid>
      <Nav>
        <>
          <StyledLink to="/">
            <img src={logo} alt="cinefilia" />
            <span>CINEFILIA</span>
          </StyledLink>
          <MoviesToggle />
        </>

        <Flex>
          <NavbarUserInfo />
        </Flex>
      </Nav>
    </ContainerFluid>
  );
}

export default Navbar;
