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

function MovieRecommendations({ movieId }) {
  const {
    data: movieRecommendations,
  } = useQuery(['movieRecommendations', movieId], () => fetchRecommendations(movieId), {
    select: (data) => data.data.results,
  });
  if (Array.isArray(movieRecommendations) && !movieRecommendations.length) {
    return (
      <>
        <h2>Reviews</h2>
        <span>No comments yet...</span>
      </>
    );
  }
  return (
    <>
      <h2>Recommendations</h2>
      <Slider {...settingsMainSlider}>
        {
          movieRecommendations?.map((item, index) => (
            <MovieCard key={index} movieData={item} />
          ))
        }
      </Slider>
    </>
  );
}

MovieRecommendations.propTypes = {
  movieId: PropTypes.number,

};
MovieRecommendations.defaultProps = {
  movieId: '',
};
export default MovieRecommendations;
