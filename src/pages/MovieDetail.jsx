import React from 'react';
// router
import { useParams } from 'react-router-dom';
// query
import { useQuery } from 'react-query';
import { fetchMovie, img500 } from '../api';
// css
import { Container, MarginVertical, Grid } from '../styles/baseStyles';

function MovieDetail() {
  const { movieId } = useParams();
  const {
    data: movieData,
  } = useQuery(['movie', movieId], () => fetchMovie(movieId), {
    select: (data) => data.data,
  });

  return (
    <Container>
      <MarginVertical>
        <Grid col={2}>
          <img src={`${img500}${movieData?.poster_path}`} alt="" />
          <div>
            <h1>{movieData?.title}</h1>
            <div>
              Türler:
              {movieData?.genres.map((genre) => (
                <span key={genre.id}>
                  {genre.name}
                  ,
                  {' '}
                </span>
              ))}
              <span>
                &
                {movieData?.release_date}
              </span>
            </div>
            <div>
              <p>{movieData?.tagline}</p>
              <p>{movieData?.overview}</p>
            </div>
            <div />
          </div>
        </Grid>
      </MarginVertical>
    </Container>
  );
}

export default MovieDetail;
