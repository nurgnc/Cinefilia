import React from 'react';
import PropTypes from 'prop-types';
// query
import { useQuery } from 'react-query';
import { fetchCredit } from '../api';
// css
import { Grid } from '../styles/baseStyles';

function MovieCrew({ movieId }) {
  const {
    data: movieCrew,
  } = useQuery(['movieCredits', movieId], () => fetchCredit(movieId), {
    select: (data) => data.data.crew,
  });

  const crew = movieCrew.slice(0, 3);
  return (
    <>
      <h3>Crew</h3>
      <Grid col={3}>
        {
          crew?.map((item) => (
            <div>
              <h4>{item.name}</h4>
              <span>{item.job}</span>
            </div>
          ))
        }
      </Grid>
    </>

  );
}

MovieCrew.propTypes = {
  movieId: PropTypes.number,

};
MovieCrew.defaultProps = {
  movieId: '',
};
export default MovieCrew;
