/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
// query
import { useQuery } from 'react-query';
import { fetchReviews } from '../api';
// css
// css
import { Grid } from '../styles/baseStyles';

function MovieReviews({ movieId }) {
  const {
    data: movieReviews,
  } = useQuery(['movieReviews', movieId], () => fetchReviews(movieId), {
    select: (data) => data.data.results,
  });
  return (
    <>
      <h2>Reviews</h2>
      <Grid col={2}>
        {movieReviews?.map((item) => (
          <Grid col={2}>
            <div>
              <img src={item.author_details.avatar_path} alt="" />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

MovieReviews.propTypes = {
  movieId: PropTypes.number,

};
MovieReviews.defaultProps = {
  movieId: '',
};
export default MovieReviews;
