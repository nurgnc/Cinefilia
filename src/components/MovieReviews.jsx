/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
// query
import { useQuery } from 'react-query';
import { fetchReviews, img300, defaultImg } from '../api';
// css
import { CardReview, ImgAvatar, CardReviewBody } from '../styles/Card.styled';
import { Flex } from '../styles/baseStyles';

function MovieReviews({ movieId }) {
  const {
    data: movieReviews,
  } = useQuery(['movieReviews', movieId], () => fetchReviews(movieId), {
    select: (data) => data.data.results,
  });

  const reviews = movieReviews?.slice(0, 1);
  const avatar = reviews?.filter((item) => item.author_details.avatar_path?.includes('http')).map((img) => (
    // eslint-disable-next-line max-len
    <ImgAvatar
      src={img.author_details.avatar_path
        // eslint-disable-next-line no-unsafe-optional-chaining
        .slice(1, img.author_details.avatar_path?.length + 1)}
      alt={img.author}
    />
  ));

  const isAvatar = avatar?.length === 0 ? (
    <ImgAvatar
      src={defaultImg}
    />
  ) : avatar;

  if (Array.isArray(movieReviews) && !movieReviews.length) {
    return (
      <>
        <h2>Reviews</h2>
        <span>No comments yet...</span>
      </>
    );
  }
  return (
    <>
      <h2>Reviews</h2>

      {reviews?.map((item, index) => (
        <CardReview key={index}>
          <Flex flexDirection="row" align="center">
            {isAvatar || <ImgAvatar src={`${img300}${item.author_details.avatar_path}`} alt={item.author} />}
            <h3>{item.author}</h3>
          </Flex>
          <CardReviewBody>
            <p>{item.content}</p>
          </CardReviewBody>
        </CardReview>
      ))}
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
