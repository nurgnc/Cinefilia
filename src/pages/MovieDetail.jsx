import React, { useEffect } from 'react';
// router
import { useParams } from 'react-router-dom';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
// query
import { useQuery } from 'react-query';
// icons
import { BiTimeFive } from 'react-icons/bi';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { fetchMovie, img500 } from '../api';
// css
import {
  Container, MarginVertical, Grid, Margin,
} from '../styles/baseStyles';
import { Genre } from '../styles/Detail.styled';
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

  const randomColor = [...Array(10)].map((item, index) => (
    Math.floor(Math.random(index) * 16777215).toString(16)
  ));

  console.log(randomColor);

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
                <BiTimeFive />
                {movieData?.runtime}
              </span>
            </p>
            <Margin mb="2rem" mt="2rem">
              {movieData?.genres.map((genre, index) => (
                <Genre randomBg={`#${randomColor[index]}`} key={genre.id}>
                  {genre.name}
                </Genre>
              ))}
            </Margin>
            <div>
              <p>{movieData?.overview}</p>
            </div>
            <div>
              <MovieCrew randomColor={randomColor} movieId={movieId} />
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
