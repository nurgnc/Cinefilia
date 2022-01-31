import React from 'react';
// icons
import { BiSearchAlt } from 'react-icons/bi';
// css
import { SearchButton } from '../styles/Navbar.styled';

function NavbarSearch() {
  return (
    <SearchButton type="button">
      <BiSearchAlt size={25} />
    </SearchButton>
  );
}

export default NavbarSearch;
