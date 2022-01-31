import React from 'react';
import PropTypes from 'prop-types';
// query
import { useQuery } from 'react-query';
import { fetchCredit } from '../api';
// css
import { Grid, MarginVertical } from '../styles/baseStyles';
import { CrewElement } from '../styles/Detail.styled';

function MovieCrew({ movieId, randomColor }) {
  const {
    data: movieCrew,
  } = useQuery(['movieCredits', movieId], () => fetchCredit(movieId), {
    select: (data) => data.data.crew,
  });

  const crew = movieCrew?.slice(0, 3);
  return (
    <MarginVertical>
      <Grid col={3}>
        {
          crew?.map((item, index) => (
            <CrewElement randomBorder={`#${randomColor[index]}`}>
              <h4>{item.name}</h4>
              <span>{item.job}</span>
            </CrewElement>
          ))
        }
      </Grid>
    </MarginVertical>

  );
}

MovieCrew.propTypes = {
  movieId: PropTypes.number,
  randomColor: PropTypes.shape,

};
MovieCrew.defaultProps = {
  movieId: '',
  randomColor: [],
};
export default MovieCrew;
