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
  return (
    <>
      <h2>Recommendations</h2>
      <Slider {...settingsMainSlider}>
        {
          movieRecommendations?.map((item) => (
            <MovieCard movieData={item} />
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
