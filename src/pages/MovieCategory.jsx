// query
import { useQuery } from 'react-query';
// router
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { fetchCat } from '../api';
// css
import { Container, MarginVertical, Grid } from '../styles/baseStyles';
import { MovieCard } from '../components';

function MovieCategory() {
  const [page, setPage] = useState(1);
  const { movieCat } = useParams();
  const [movieData, setMovieData] = useState([]);

  // const {
  //   data: movieCategory,
  // } = useQuery(['movieCategory', movieCat, page], () => {
  //   fetchCat(movieCat, page);
  //   movieData.push(...movieCategory);
  // }, {
  //   refetchOnWindowFocus: false,
  //   select: (data) => data,
  // });

  useQuery(['movieCategory', movieCat, page], async () => {
    const { data } = await fetchCat(movieCat, page);
    movieData.push(...data.results);
    return movieData;
  });

  return (
    <Container>
      <MarginVertical>
        <Grid col={4}>
          {movieData?.map((item) => (
            <MovieCard movieData={item} />
          ))}
          <button
            type="button"
            onClick={() => {
              setPage(page + 1);
              setMovieData(movieData);
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
