import React, { useState } from 'react';
// icons
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
// debounce perform
import debounce from 'lodash.debounce';
// components
import DiscoverWidget from './DiscoverWidget';
import TrendingWidget from './TrendingWidget';
import Search from '../pages/Search';

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
      <div>
        <input
          name="name"
          type="text"
          id="search"
          onChange={debouncedOnChange}
          placeholder="Search movie..."
        />
        <button type="button">
          <AiOutlineSearch size={25} />
        </button>
        <button onClick={(e) => inputReset(e)} type="button">
          <AiOutlineCloseCircle size={25} />
        </button>
      </div>
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
