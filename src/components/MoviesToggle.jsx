import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// icons
import { MdKeyboardArrowDown } from 'react-icons/md';
// css
import { Flex } from '../styles/baseStyles';
import { DropDown, DropDownList } from '../styles/Navbar.styled';

function MoviesToggle() {
  const [toggle, setToggle] = useState(false);
  const popular = 'popular';
  const topRated = 'top_rated';

  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      onMouseLeave={() => setToggle(!toggle)}
      onMouseEnter={() => setToggle(!toggle)}
      onClick={() => setToggle(!toggle)}
    >
      <DropDown>
        <span>Movies</span>
        {' '}
        <MdKeyboardArrowDown />
      </DropDown>
      <DropDownList display={toggle === true ? 'block' : 'none'}>
        <ul>
          <li>
            <Link to={`/movie/${popular}`}>Popular</Link>
          </li>
          <li>
            <Link to={`/movie/${topRated}`}>Top Rated</Link>
          </li>
        </ul>
      </DropDownList>
    </Flex>
  );
}

export default MoviesToggle;
