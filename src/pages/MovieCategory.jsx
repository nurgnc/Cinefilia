// query
import { useQuery } from 'react-query';
// router
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { base, apiKey, fetchGenres } from '../api';
// css
import { Container, MarginVertical, Grid } from '../styles/baseStyles';
import { MovieCard } from '../components';

function MovieCategory() {
  const [page, setPage] = useState(1);
  const { movieCat } = useParams();
  const [movieData, setMovieData] = useState([]);

  const { data: movieGenres } = useQuery(
    'movieGenres',
    fetchGenres,
    {
      select: (data) => data.data.genres,
    },
  );

  const fetchData = (pageNumber, category) => base.get(`/movie/${category}${apiKey}&page=${pageNumber}`).then((response) => {
    const movies = response.data.results;
    console.log('---------movies', movies);
    movieData?.push(...movies);
    console.log('********movieData', movieData);
    setMovieData(movieData);
  });
  console.log(page);
  console.log(movieCat);

  useEffect(() => {
    console.log('effecte girdi');
    fetchData(page, movieCat);
  }, [page, movieCat]);

  return (
    <Container>
      <MarginVertical>
        <Grid col={4}>
          {movieData?.map((item) => (
            <MovieCard
              movieData={item}
              genres={movieGenres
                ?.filter((genre) => item?.genre_ids?.includes(genre.id))}
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
