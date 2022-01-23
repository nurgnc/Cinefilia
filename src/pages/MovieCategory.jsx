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
  const {
    data: movieData,
  } = useQuery(
    ['movieCategory', movieCat, page],
    () => fetchCat(movieCat, page),
    {
      select: (data) => data.data.results,
    },
  );
  return (
    <Container>
      <MarginVertical>
        <Grid col={4}>
          {movieData?.map((item) => (
            <MovieCard data={item} />
          ))}
          <button type="button" onClick={() => setPage(page + 1)}>Load More</button>
        </Grid>
      </MarginVertical>
    </Container>
  );
}

export default MovieCategory;
