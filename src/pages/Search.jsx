import React from 'react';
import PropTypes from 'prop-types';
// query
import { useQuery } from 'react-query';
import { fetchSearch } from '../api';
// css
import { Grid, MarginVertical } from '../styles/baseStyles';
import MovieCard from '../components/MovieCard';

function Search({ search }) {
  const {
    data: searchMovie,
  } = useQuery(['searchMovie', search], () => fetchSearch(search), {
    select: (data) => data.data.results,
  });

  return (
    <MarginVertical>
      <Grid col={4}>
        {
          searchMovie?.map((item) => (
            <MovieCard movieData={item} />
          ))
        }
      </Grid>
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
