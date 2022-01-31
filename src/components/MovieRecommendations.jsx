/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
// slider package
import Slider from 'react-slick';
// query
import { useQuery } from 'react-query';
import { fetchRecommendations } from '../api';
// component
import MovieCard from './MovieCard';
// slider local
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsMainSlider } from './SliderSettings';
// css
import { Container } from '../styles/baseStyles';
import { LineTitle } from '../styles/Detail.styled';

function MovieRecommendations({ movieId }) {
  const {
    data: movieRecommendations,
  } = useQuery(['movieRecommendations', movieId], () => fetchRecommendations(movieId), {
    select: (data) => data.data.results,
  });
  if (Array.isArray(movieRecommendations) && !movieRecommendations.length) {
    return (
      <Container>
        <LineTitle>Reviews</LineTitle>
        <span>No comments yet...</span>
      </Container>
    );
  }
  return (
    <Container>
      <LineTitle>Recommendations</LineTitle>
      <Slider {...settingsMainSlider}>
        {
          movieRecommendations?.map((item, index) => (
            <MovieCard key={index} movieData={item} />
          ))
        }
      </Slider>
    </Container>
  );
}

MovieRecommendations.propTypes = {
  movieId: PropTypes.number,

};
MovieRecommendations.defaultProps = {
  movieId: '',
};
export default MovieRecommendations;
