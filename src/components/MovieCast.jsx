/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
// slider package
import Slider from 'react-slick';
// query
import { useQuery } from 'react-query';
import { fetchCredit } from '../api';
// component
import DetailCard from './DetailCard';
// slider local
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsActorSlider } from './SliderSettings';

function MovieCast({ movieId }) {
  const {
    data: movieCast,
  } = useQuery(['movieCast', movieId], () => fetchCredit(movieId), {
    select: (data) => data.data.cast,
  });
  return (
    <>
      <h2>Actors</h2>
      <Slider {...settingsActorSlider}>
        {
          // eslint-disable-next-line react/prop-types
          movieCast?.map((cast) => (
            <DetailCard
              id={cast.id}
              key={cast.id}
              img={cast.profile_path}
              characterName={cast.character}
              originalName={cast.original_name}
            />
          ))
        }
      </Slider>
    </>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.number,

};
MovieCast.defaultProps = {
  movieId: '',
};
export default MovieCast;
