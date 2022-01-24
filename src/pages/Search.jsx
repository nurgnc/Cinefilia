import React, { useState } from 'react';
// query
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { fetchSearch } from '../api';
// components
import { MovieSearch } from '../components';

// icons
// import { RiErrorWarningLine } from "react-icons/ri";

function Search() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  console.log('urlparams', urlParams);
  const [search] = useState(urlParams.get('name'));
  const [searchMovie, setSearchMovie] = useState([]);

  useQuery(['searchMovie', search], () => {
    const { data } = fetchSearch(search);
    setSearchMovie(data);
    console.log('data', data);
  });

  // const isSearch = search !== null && !searchCharacter?.length;

  // if (isSearch) {
  //   return (
  //     <>
  //       <MovieSearch />
  //       <div className="container my-5">
  //         <div className="alert d-flex flex-row" role="alert">
  //           <RiErrorWarningLine size={35} color="red" className="me-3" />
  //           <h2>There is no such character...</h2>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <MovieSearch />
      {
        searchMovie?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))
      }
    </>
  );
}

export default Search;
