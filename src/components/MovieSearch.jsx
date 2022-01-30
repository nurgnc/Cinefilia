import React, { useState } from 'react';

// debounce perform
import debounce from 'lodash.debounce';
// components
import DiscoverWidget from './DiscoverWidget';
import TrendingWidget from './TrendingWidget';
import Search from '../pages/Search';
// css
import { MarginVertical } from '../styles/baseStyles';
import { SearchInput, ResetButton, SearchBar } from '../styles/InputsAndButtons.styled';

function MovieSearch() {
  const [search, setSearch] = useState('');

  const updateQuery = (e) => setSearch(e?.target?.value);

  const debouncedOnChange = debounce(updateQuery, 3000);

  const inputReset = (e) => {
    e.preventDefault();
    setSearch(e?.target?.value === ' ');
    document.getElementById('search').value = '';
  };

  return (
    <>
      <MarginVertical>
        <SearchBar>
          <SearchInput
            name="name"
            type="text"
            id="search"
            onChange={debouncedOnChange}
            placeholder="Search movie..."
          />
          <ResetButton size={30} onClick={(e) => inputReset(e)} />
        </SearchBar>
      </MarginVertical>
      <div>
        {
          search
            ? <Search search={search} />
            : (
              <>
                <DiscoverWidget />
                <TrendingWidget />
              </>
            )
        }
      </div>
    </>
  );
}

export default MovieSearch;
