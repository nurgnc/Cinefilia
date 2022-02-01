import React, { useState } from 'react';
// query
import { useQuery } from 'react-query';
// icons
import { BiSearchAlt, BiCameraMovie } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
// debounce perform
import debounce from 'lodash.debounce';
import { fetchSearch } from '../api';
// css
import { Flex } from '../styles/baseStyles';
import {
  SearchContent, SearchButton, SearchResults, MovieLink,
} from '../styles/Navbar.styled';

function NavbarSearch() {
  const [search, setSearch] = useState('');
  const [collapse, setCollapse] = useState(false);

  const {
    data: searchMovie,
  } = useQuery(['searchMovie', search], () => fetchSearch(search), {
    select: (data) => data.data.results,
  });

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 1000);

  return (
    <Flex flexDirection="row" justify="center" align="center" width={collapse ? '360px' : ''} backGround="#fff" radius="15px">
      {collapse && (
        <SearchContent>
          <input
            type="name"
            name="name"
            id="search"
            onChange={debouncedOnChange}
            placeholder="Search movie..."
          />
          {search.length !== 0 && (
            <SearchResults>
              {searchMovie
                ?.filter((title) => title.title && title.id)
                ?.map((item) => (
                  <li>
                    <BiCameraMovie />
                    <MovieLink
                      to={`/movies/${item.id}`}
                      onClick={() => {
                        setCollapse(false);
                        setSearch('');
                      }}
                    >
                      {item.title}
                    </MovieLink>
                  </li>
                ))}
            </SearchResults>
          )}
        </SearchContent>
      )}
      {collapse ? (
        <SearchButton type="button" onClick={() => setCollapse(false)}>
          <CgClose size={25} />
        </SearchButton>
      )
        : (
          <SearchButton type="button" onClick={() => setCollapse(true)}>
            <BiSearchAlt size={25} />
          </SearchButton>
        )}
    </Flex>
  );
}

export default NavbarSearch;
