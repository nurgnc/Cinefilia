import { useState } from "react";
import { useLocation } from "react-router-dom";
//query
import { useQuery } from "react-query";
import { fetchSearch } from "../api";
//components
import { MovieSearch } from "../components";

//icons
import { RiErrorWarningLine } from "react-icons/ri";

const Search = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const search = urlParams.get("query");

  const { isFetching, isLoading, isError, error, data, isFetched, ...query } =
    useQuery("searchMovie", () => fetchSearch(search), {
      select: (data) => data.data.results,
    });

  console.log(data);
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
      search
    </>
  );
};

export default Search;
