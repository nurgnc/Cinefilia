import React from 'react';
// components
import { MoviesToggle, NavbarUserInfo } from '../index';
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
          <NavbarUserInfo />
        </Flex>
      </Nav>
    </ContainerFluid>
  );
}

export default Navbar;
