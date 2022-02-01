import React, { useState } from 'react';
// query
import { useQuery } from 'react-query';
// icons
import { BiSearchAlt } from 'react-icons/bi';
// debounce perform
import debounce from 'lodash.debounce';
import { fetchSearch } from '../api';
// css
import { SearchButton } from '../styles/Navbar.styled';

function NavbarSearch() {
  const [search, setSearch] = useState('');

  const {
    data: searchMovie,
  } = useQuery(['searchMovie', search], () => fetchSearch(search), {
    select: (data) => data.data.results,
  });

  // console.log(searchMovie);

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 2000);
  return (
    <>
      <div>
        <input
          type="search"
          name="name"
          id="search"
          onChange={debouncedOnChange}
          placeholder="Search movie..."
        />
        <ul>
          {searchMovie
            ?.filter((title) => title.title && title.id)
            ?.map((item) => (
              <li>
                {item.title}
                ,
                {' '}
                {item.id}
              </li>
            ))}
        </ul>
      </div>
      <SearchButton type="button">
        <BiSearchAlt size={25} />
      </SearchButton>
    </>
  );
}

export default NavbarSearch;
