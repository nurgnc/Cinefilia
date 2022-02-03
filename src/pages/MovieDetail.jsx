import React from 'react';
// router
import { useParams } from 'react-router-dom';
// query
import { useQuery } from 'react-query';
// icons
import { BiTimeFive } from 'react-icons/bi';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { fetchMovie, img500 } from '../api';
// css
import {
  Container, MarginVertical, Margin, Flex, BgContent,
} from '../styles/baseStyles';
import {
  Genre, OverView, Poster, GrayText,
} from '../styles/Detail.styled';
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

  const randomColor = [...Array(5)].map((item, index) => (
    Math.floor(Math.random(index) * 16777215).toString(16)
  ));

  return (
    <>
      <Container>
        <MarginVertical>
          <Flex flexDirection="row" align="start" justify="space-around" wrap="wrap">
            <div>
              <Poster src={`${img500}${movieData?.poster_path}`} alt="" />
            </div>
            <Flex flexDirection="column" align="start" justify="space-between" width="min-content" resAlign="center" resJustify="center">
              <h1>{movieData?.title}</h1>
              <Flex flexDirection="row" align="center" justify="space-between" width="35%">
                <Flex flexDirection="row" align="center" justify="space-between" width="auto">
                  <BsFillCalendar2CheckFill color="#686D76" />
                  <GrayText>
                    {movieData?.release_date}
                  </GrayText>
                </Flex>
                <Flex flexDirection="row" align="center" justify="space-between" width="auto">
                  <BiTimeFive size={20} color="#686D76" />
                  <GrayText>
                    {movieData?.runtime}
                  </GrayText>
                </Flex>
              </Flex>
              <Margin mb="2rem" mt="2rem">
                {movieData?.genres.map((genre, index) => (
                  <Genre randomBg={`#${randomColor[index]}`} key={genre.id}>
                    {genre.name}
                  </Genre>
                ))}
              </Margin>
              <div>
                <OverView>
                  <blockquote>
                    {movieData?.overview}
                  </blockquote>
                </OverView>
              </div>
              <Flex flexDirection="row" justify="center" align="center" width="90%">
                <MovieCrew randomColor={randomColor} movieId={movieId} />
              </Flex>
            </Flex>
          </Flex>
        </MarginVertical>
      </Container>
      <BgContent>
        <MovieCast movieId={movieId} />
      </BgContent>
      <MarginVertical>
        <MovieReviews movieId={movieId} />
      </MarginVertical>
      <MarginVertical>
        <MovieRecommendations movieId={movieId} />
      </MarginVertical>
    </>
  );
}

export default MovieDetail;
