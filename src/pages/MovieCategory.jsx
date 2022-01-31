/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-await */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import { base, apiKey, fetchGenres } from '../api';
// css
import {
  Container, MarginVertical, Grid, Flex, Width,
} from '../styles/baseStyles';
import { MovieCard } from '../components';

function MovieCategory() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [movieData, setMovieData] = useState([]);
  const [filterData, setFilterData] = useState(movieData);
  const [genreId, setGenreId] = useState('');
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [select, setSelect] = useState();
  const movieCat = location?.pathname.split('movie/')[1];

  const fetchData = async (cat, id) => await base.get(`/movie/${cat}${apiKey}&with_genres=${id}`).then((response) => {
    const movies = response.data.results;
    setFilterData(movies, ...filterData);
  });

  const fetchCat = async (category) => await base.get(`/movie/${category}${apiKey}&with_genres=${genreId}`).then((response) => {
    const movies = response.data.results;
    setMovieData(movies, ...filterData);
  });

  const fetchDateToDate = (startDate, endDate) => base.get(`/discover/movie${apiKey}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`).then((response) => {
    const movies = response.data.results;
    setFilterData(movies, ...filterData);
  });

  const fetchLoadMore = async (pageNumber) => await base.get(`/movie/${movieCat}${apiKey}&page=${pageNumber}&with_genres=${genreId}`).then((response) => {
    const movies = response.data.results;
    const subData = [];
    subData.push(...filterData);
    subData.push(...movies);
    setMovieData(subData);
    // setFilterData(subData);
  });

  const { data: movieGenres } = useQuery(
    'movieGenres',
    fetchGenres,
    {
      select: (data) => data.data.genres,
    },
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    fetchDateToDate(fromDate, toDate);
  }, [fromDate, toDate]);

  useEffect(() => {
    const category = location?.pathname.split('movie/')[1];
    fetchCat(category);
  }, [location]);

  useEffect(() => {
    fetchData(movieCat, genreId);
  }, [genreId]);

  useEffect(() => {
    fetchLoadMore(page);
  }, [page]);

  // sort functions
  function getCopy(data) {
    return JSON.parse(JSON.stringify(data));
  }

  function handleSortAlph(desc) {
    let sortedData = getCopy(filterData).sort((a, b) => a.title.localeCompare(b.title));
    if (desc) {
      sortedData = sortedData.reverse();
    }
    setFilterData(sortedData);
  }
  function handleSortPopularity(desc) {
    let sortedData = getCopy(filterData).sort((a, b) => a.popularity - b.popularity);
    if (desc) {
      sortedData = sortedData.reverse();
    }
    setFilterData(sortedData);
  }
  function handleSortRelease(desc) {
    let sortedData = getCopy(filterData)
      .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    if (desc) {
      sortedData = sortedData.reverse();
    }
    setFilterData(sortedData);
  }
  useEffect(() => {
    if (select === 'a-to-z') {
      handleSortAlph(false);
    } else if (select === 'z-to-a') {
      handleSortAlph(true);
    } else if (select === 'popularAsc') {
      handleSortPopularity(false);
    } else if (select === 'popularDesc') {
      handleSortPopularity(true);
    } else if (select === 'dateAsc') {
      handleSortRelease(false);
    } else if (select === 'dateDesc') {
      handleSortRelease(true);
    }
  }, [select]);

  return (
    <Container>
      <MarginVertical>
        <Flex flexDirection="row" justify="flex-start" align="start">
          <Width value="30%">
            <select onChange={(e) => setSelect(e.target.value)}>
              <option value="sort">Sort By:</option>
              <option value="a-to-z">Movie Title (from A to Z)</option>
              <option value="z-to-a">Movie Title (from Z to A)</option>
              <option value="popularDesc">Most Populars</option>
              <option value="popularAsc">Least Populars</option>
              <option value="dateDesc">Newest Released</option>
              <option value="dateAsc">Oldest Released</option>
            </select>
            <br />
            <div>
              <div>
                {movieGenres?.map((genre, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setGenreId(genre.id)}
                  >
                    {genre.name}

                  </button>
                ))}
              </div>
              <br />
              <br />
              Date:
              <input
                type="date"
                id="from_date"
                name="from_date"
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type="date"
                id="to_date"
                name="to_date"
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <button type="button" onClick={() => setMovieData(filterData)}>Filter</button>
          </Width>
          <Grid col={3} data-aos="fade-up">
            {movieData?.map((item, index) => (
              <MovieCard
                key={index}
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
        </Flex>
      </MarginVertical>
    </Container>
  );
}

export default MovieCategory;
