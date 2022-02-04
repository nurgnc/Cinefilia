/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// slider package
import Slider from 'react-slick';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
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
import { Container, CenterText } from '../styles/baseStyles';
import { LineTitle } from '../styles/Detail.styled';

function MovieRecommendations({ movieId }) {
  const {
    data: movieRecommendations,
  } = useQuery(['movieRecommendations', movieId], () => fetchRecommendations(movieId), {
    select: (data) => data.data.results,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (Array.isArray(movieRecommendations) && !movieRecommendations.length) {
    return (
      <Container data-aos="fade-up">
        <LineTitle>Reviews</LineTitle>
        <CenterText>No comments yet...</CenterText>
      </Container>
    );
  }
  return (
    <Container data-aos="fade-up">
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
  movieId: PropTypes.string,

};
MovieRecommendations.defaultProps = {
  movieId: '',
};
export default MovieRecommendations;
