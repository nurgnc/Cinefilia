import React from 'react';
import { useLocation } from 'react-router-dom';
// query
import { useQuery } from 'react-query';
import { fetchSearch } from '../api';
// components
import { MovieSearch } from '../components';

// icons
// import { RiErrorWarningLine } from "react-icons/ri";

function Search() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const search = urlParams.get('query');

  const { data: movieData } = useQuery('searchMovie', () => fetchSearch(search), { select: (data) => data.data.results });

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
      <MovieSearch data={movieData} />
      search
    </>
  );
}

export default Search;
