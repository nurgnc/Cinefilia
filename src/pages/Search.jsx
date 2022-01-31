/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
// query
import { useQuery } from 'react-query';
import { fetchSearch } from '../api';
// components
import SearchPagination from '../components/SearchPagination';
// css
import { Grid, MarginVertical } from '../styles/baseStyles';
import MovieCard from '../components/MovieCard';

function Search({ search }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const {
    data: searchMovie,
  } = useQuery(['searchMovie', search], () => fetchSearch(search), {
    select: (data) => data.data.results,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const totalMovies = searchMovie?.length;
  // get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchMovie?.slice(indexOfFirstMovie, indexOfLastMovie);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <MarginVertical data-aos="fade-up">
      <Grid col={4}>
        {
          currentMovies?.map((item, index) => (
            <MovieCard key={index} movieData={item} />
          ))
        }
      </Grid>
      <SearchPagination
        moviesPerPage={moviesPerPage}
        totalMovies={totalMovies}
        paginate={paginate}
        currentPage={currentPage}
      />
    </MarginVertical>
  );
}

Search.propTypes = {
  search: PropTypes.string,

};
Search.defaultProps = {
  search: '',
};

export default Search;
