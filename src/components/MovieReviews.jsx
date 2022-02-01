/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
// query
import { useQuery } from 'react-query';
import { fetchReviews, img300 } from '../api';
import defaultImg from '../assets/img/defaultImg.jpg';

// css
import { CardReview, ImgAvatar, CardReviewBody } from '../styles/Card.styled';
import { Container, Flex, CenterText } from '../styles/baseStyles';
import { LineTitle } from '../styles/Detail.styled';

function MovieReviews({ movieId }) {
  const {
    data: movieReviews,
  } = useQuery(['movieReviews', movieId], () => fetchReviews(movieId), {
    select: (data) => data.data.results,
  });

  const reviews = movieReviews?.slice(0, 2);
  const avatar = reviews?.slice(0, 1)?.filter((item) => item.author_details.avatar_path?.includes('gravatar')).map((img, index) => (
    // eslint-disable-next-line max-len
    <ImgAvatar
      key={index}
      width="150px"
      src={img.author_details.avatar_path
        // eslint-disable-next-line no-unsafe-optional-chaining
        .slice(1, img.author_details.avatar_path?.length + 1)}
      alt={img.author}
    />
  ));

  const isAvatar = avatar?.length === 0 ? (
    <ImgAvatar
      width="150px"
      src={defaultImg}
    />
  ) : avatar;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (Array.isArray(movieReviews) && !movieReviews.length) {
    return (
      <Container data-aos="fade-left">
        <LineTitle>Reviews</LineTitle>
        <CenterText>No comments yet...</CenterText>
      </Container>
    );
  }
  return (
    <Container data-aos="fade-left">
      <LineTitle>Reviews</LineTitle>
      <Flex flexDirection="row" align="center" justify="space-between">
        {reviews?.map((item, index) => (
          <CardReview key={index} height="35vh">
            <Flex flexDirection="row" align="center">
              {isAvatar || (<ImgAvatar width="150px" src={`${img300}${item.author_details.avatar_path}`} alt={item.author} />)}
              <h3>{item.author}</h3>
            </Flex>
            <CardReviewBody>
              <p>
                {item.content && item.content.substring(0, 500)}
                ...
              </p>
            </CardReviewBody>
          </CardReview>
        ))}
      </Flex>
    </Container>
  );
}

MovieReviews.propTypes = {
  movieId: PropTypes.string,

};
MovieReviews.defaultProps = {
  movieId: '',
};
export default MovieReviews;
