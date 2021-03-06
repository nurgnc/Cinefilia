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
import { fetchCredit } from '../api';
// component
import DetailCard from './DetailCard';
// slider local
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsActorSlider } from './SliderSettings';
// css
import { Container } from '../styles/baseStyles';
import { LineTitle } from '../styles/Detail.styled';

function MovieCast({ movieId }) {
  const {
    data: movieCast,
  } = useQuery(['movieCast', movieId], () => fetchCredit(movieId), {
    select: (data) => data.data.cast,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container data-aos="fade-up">
      <LineTitle>
        Actors
      </LineTitle>
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
    </Container>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.string,

};
MovieCast.defaultProps = {
  movieId: '',
};
export default MovieCast;
