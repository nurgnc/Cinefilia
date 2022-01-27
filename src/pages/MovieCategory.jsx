// router
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { base, apiKey } from '../api';
// css
import {
  Container, MarginVertical, Grid,
} from '../styles/baseStyles';
import { MovieCard } from '../components';

function MovieCategory() {
  const [page, setPage] = useState(1);
  const { movieCat } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [filterData, setFilterData] = useState(movieData);

  const fetchData = (pageNumber, category) => base.get(`/movie/${category}${apiKey}&page=${pageNumber}`).then((response) => {
    const movies = response.data.results;
    movieData?.push(...movies);
    setMovieData(movieData);
  });

  function handleSortAZ() {
    movieData.sort((a, b) => a.title.localeCompare(b.title));
    setFilterData(movieData);
  }
  function handleSortZA() {
    movieData.sort((a, b) => b.title.localeCompare(a.title));
    setFilterData(movieData);
  }

  function handlePopularityAscSort() {
    movieData.sort((a, b) => a.popularity - b.popularity);
  }

  function handlePopularityDescSort() {
    movieData.sort((a, b) => b.popularity - a.popularity);
  }
  function handleReleaseAscSort() {
    movieData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  }
  function handleReleaseDescSort() {
    movieData.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
  }

  useEffect(() => {
    fetchData(page, movieCat);
  }, [page, movieCat, filterData]);

  return (
    <Container>
      <MarginVertical>
        <div>
          <h1>Filter</h1>
          <button type="button" onClick={() => handleSortAZ()}>
            Sorting A - Z
          </button>
          <button type="button" onClick={() => handleSortZA()}>
            Sorting Z - A
          </button>
          <button type="button" onClick={() => handlePopularityAscSort()}>
            Popular Asc
          </button>
          <button type="button" onClick={() => handlePopularityDescSort()}>
            Popular Desc
          </button>
          <button type="button" onClick={() => handleReleaseAscSort()}>
            Release Date Asc
          </button>
          <button type="button" onClick={() => handleReleaseDescSort()}>
            Release Date Desc
          </button>
        </div>
        <Grid col={4}>
          {filterData?.map((item) => (
            <MovieCard
              movieData={item}
            />
          ))}
          <button
            type="button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load More

          </button>
        </Grid>
      </MarginVertical>
    </Container>
  );
}

export default MovieCategory;
