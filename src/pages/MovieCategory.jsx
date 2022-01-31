/* eslint-disable react/no-array-index-key */
/* eslint-disable no-return-await */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
// icons
import { BiSearchAlt } from 'react-icons/bi';
import { FiLoader } from 'react-icons/fi';
import { base, apiKey, fetchGenres } from '../api';
// css
import {
  Container, MarginVertical, Grid, Flex, Width, Margin,
} from '../styles/baseStyles';
import {
  FilterContent, SortContent, GenreButton, FilterButton, DateInput, LoadButton,
} from '../styles/SortFilter.styled';
import { GrayText } from '../styles/Detail.styled';
// component
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
        <Flex flexDirection="row" justify="space-between" align="start">
          <Width value="30%">
            <SortContent>
              <h3>Sort By:</h3>
              <select onChange={(e) => setSelect(e.target.value)}>
                <option value="sort">Select</option>
                <option value="a-to-z">Movie Title (from A to Z)</option>
                <option value="z-to-a">Movie Title (from Z to A)</option>
                <option value="popularDesc">Most Populars</option>
                <option value="popularAsc">Least Populars</option>
                <option value="dateDesc">Newest Released</option>
                <option value="dateAsc">Oldest Released</option>
              </select>
            </SortContent>
            <FilterContent>
              <h3>Filter By:</h3>
              <Margin mb="1em">
                <Flex flexDirection="row" align="center" justify="space-between" width="70%" mb=".8em">
                  <GrayText>From :</GrayText>
                  <DateInput
                    type="date"
                    id="from_date"
                    name="from_date"
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </Flex>
                <Flex flexDirection="row" align="center" justify="space-between" width="70%">
                  <GrayText>To :</GrayText>
                  <DateInput
                    type="date"
                    id="to_date"
                    name="to_date"
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </Flex>
              </Margin>
              <div>
                {movieGenres?.map((genre, index) => (
                  <GenreButton
                    key={index}
                    type="button"
                    active={genre.id === genreId ? 'active' : ''}
                    onClick={() => setGenreId(genre.id)}
                  >
                    {genre.name}
                  </GenreButton>
                ))}
              </div>

            </FilterContent>
            <FilterButton type="button" onClick={() => setMovieData(filterData)}>
              <Flex flexDirection="row" align="center" justify="center">
                <BiSearchAlt size={25} />
                {' '}
                Search
              </Flex>

            </FilterButton>
          </Width>
          <Flex flexDirection="column" align="center" justify="center">
            <Grid col={3}>
              {movieData?.map((item, index) => (
                <MovieCard
                  key={index}
                  movieData={item}
                />
              ))}

            </Grid>

            <LoadButton
              type="button"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <Flex flexDirection="row" align="center" justify="center">
                <FiLoader size={25} />
                Load More
              </Flex>
            </LoadButton>
          </Flex>
        </Flex>
      </MarginVertical>
    </Container>
  );
}

export default MovieCategory;
