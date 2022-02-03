/* eslint-disable react/no-array-index-key */
import React from 'react';
// components
import { MoviesToggle, NavbarUserInfo } from '../index';
import routes from '../../router';
// css
import { ContainerFluid, Flex } from '../../styles/baseStyles';
import { Nav, StyledLink, NavLink } from '../../styles/Navbar.styled';
// logo
import logo from '../../assets/img/logo.png';

function Navbar() {
  return (
    <ContainerFluid>
      <Nav>
        <Flex flexDirection="row" resFlexDirection="column" resAlign="start" align="end" justify="space-around" width="100%">
          <StyledLink to="/">
            <img src={logo} alt="cinefilia" />
            <span>CINEFILIA</span>
          </StyledLink>
          <Flex flexDirection="row" align="center" justify="space-evenly" width="50%">
            <MoviesToggle />
            {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                <div key={index}>
                  <NavLink to={item.path}>
                    {item.title}
                  </NavLink>
                </div>
              ))}
          </Flex>
        </Flex>

        <NavbarUserInfo />
      </Nav>
    </ContainerFluid>
  );
}

export default Navbar;
