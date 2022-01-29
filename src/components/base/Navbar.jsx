import React from 'react';
// components
import { ThemeButton, MoviesToggle, NavbarUserInfo } from '../index';
// css
import { ContainerFluid, Flex } from '../../styles/baseStyles';
import { Nav, StyledLink } from '../../styles/Navbar.styled';

function Navbar() {
  return (
    <ContainerFluid>
      <Nav>
        <>
          <StyledLink to="/">
            CINEFILIA
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
