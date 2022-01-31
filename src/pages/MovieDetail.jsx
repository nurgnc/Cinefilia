import React, { useEffect } from 'react';
// router
import { useParams } from 'react-router-dom';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
// query
import { useQuery } from 'react-query';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { fetchMovie, img500 } from '../api';
// icons
// css
import { Container, MarginVertical, Grid } from '../styles/baseStyles';
// components
import {
  MovieCast, MovieRecommendations, MovieReviews, MovieCrew,
} from '../components';

function MovieDetail() {
  const { movieId } = useParams();
  const {
    data: movieData,
  } = useQuery(['movie', movieId], () => fetchMovie(movieId), {
    select: (data) => data.data,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <MarginVertical>
        <Grid col={2}>
          <img src={`${img500}${movieData?.poster_path}`} alt="" />
          <div>
            <h1>{movieData?.title}</h1>
            <p>
              <span>
                <BsFillCalendar2CheckFill color="#141E61" />
                {movieData?.release_date}
              </span>
              <span>
                -----
                {movieData?.runtime}
              </span>
            </p>
            <div>
              Genres:
              {movieData?.genres.map((genre) => (
                <span key={genre.id}>
                  {genre.name}
                  ,
                  {' '}
                </span>
              ))}
            </div>
            <div>
              <p>{movieData?.overview}</p>
            </div>
            <div>
              <MovieCrew movieId={movieId} />
            </div>
            <div />
          </div>
        </Grid>
      </MarginVertical>
      <MarginVertical data-aos="fade-right">
        <MovieCast movieId={movieId} />
      </MarginVertical>
      <MarginVertical data-aos="fade-left">
        <MovieReviews movieId={movieId} />
      </MarginVertical>
      <MarginVertical data-aos="fade-up">
        <MovieRecommendations movieId={movieId} />
      </MarginVertical>
    </Container>
  );
}

export default MovieDetail;
