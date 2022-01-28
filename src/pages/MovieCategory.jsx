/* eslint-disable no-return-await */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { base, apiKey, fetchGenres } from '../api';
// css
import {
  Container, MarginVertical, Grid, Flex,
} from '../styles/baseStyles';
import { MovieCard } from '../components';

function MovieCategory() {
  const [page, setPage] = useState(1);
  const { category } = useSelector((state) => state);
  const [movieData, setMovieData] = useState([]);
  const [filterData, setFilterData] = useState(movieData);
  const [genreId, setGenreId] = useState('');
  console.log('----genreId', genreId);

  // console.log(category);
  const fetchData = async (pageNumber, cat) => await base.get(`/movie/${cat}${apiKey}&page=${pageNumber}`).then((response) => {
    const movies = response.data.results;
    const subData = [];
    subData.push(...movieData);
    subData.push(...movies);
    setMovieData(subData);
    setFilterData(subData);
  });

  // const fetchGenreFilter = async (id) => await
  // base.get(`/discover/movie/${apiKey}&with_genres=${id}`).then((response) => {
  //   const movies = response.data.results;
  //   console.log(movies);
  //   setFilterData(movies);
  // });

  const { data: movieGenres } = useQuery(
    'movieGenres',
    fetchGenres,
    {
      select: (data) => data.data.genres,
    },
  );

  // console.log(movieGenres);
  useEffect(() => {
    fetchData(page, category, genreId);
  }, [page, category, genreId]);

  // useEffect(() => {
  //   fetchGenreFilter(genreId);
  // }, [genreId]);

  // sort functions
  function getCopy(data) {
    return JSON.parse(JSON.stringify(data));
  }

  function handleSortAlph(desc) {
    let sortedData = getCopy(movieData).sort((a, b) => a.title.localeCompare(b.title));
    if (desc) {
      sortedData = sortedData.reverse();
    }
    setFilterData(sortedData);
  }
  function handleSortPopularity(desc) {
    let sortedData = getCopy(movieData).sort((a, b) => a.popularity - b.popularity);
    if (desc) {
      sortedData = sortedData.reverse();
    }
    setFilterData(sortedData);
  }
  function handleSortRelease(desc) {
    let sortedData = getCopy(movieData)
      .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    if (desc) {
      sortedData = sortedData.reverse();
    }
    setFilterData(sortedData);
  }

  return (
    <Container>
      <MarginVertical>
        <div>
          <h1>Sort</h1>
          <select>
            <option value="a-to-z">Movie Title (from A to Z)</option>
            <option value="z-to-a">Movie Title (from Z to A)</option>
            <option value="most-populars">Most Populars</option>
            <option value="least-populars">Least Populars</option>
            <option value="newest">Newest Released</option>
            <option value="oldest">Oldest Released</option>
          </select>
          <br />
          <br />
          <button type="button" onClick={() => handleSortAlph(false)}>
            Sorting A - Z
          </button>
          <button type="button" onClick={() => handleSortAlph(true)}>
            Sorting Z - A
          </button>
          <button type="button" onClick={() => handleSortPopularity(false)}>
            Popular Asc
          </button>
          <button type="button" onClick={() => handleSortPopularity(true)}>
            Popular Desc
          </button>
          <button type="button" onClick={() => handleSortRelease(false)}>
            Release Date Asc
          </button>
          <button type="button" onClick={() => handleSortRelease(true)}>
            Release Date Desc
          </button>
        </div>
        <div>
          <h1>Filter</h1>
          <div>
            <h3>Genres:</h3>
            <Flex>
              {movieGenres?.map((genre) => (
                <button
                  type="button"
                  onClick={() => setGenreId(genre.id)}
                >
                  {genre.name}

                </button>
              ))}
            </Flex>
          </div>
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
