import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCard,
  MovieLink,
  CardImg,
  CardBody,
} from '../styles/Card.styled';
import { img300 } from '../api';

function MovieCard({ data }) {
  return (
    <StyledCard key={data.id}>
      <CardImg>
        <img src={`${img300}${data?.poster_path}`} alt={data?.title} />
      </CardImg>
      <CardBody>
        <MovieLink to={`/movies/${data?.id}`}>{data?.title}</MovieLink>
        <p>{data?.release_date}</p>
      </CardBody>
    </StyledCard>
  );
}

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
  }),
};
MovieCard.defaultProps = {
  data: [],
};

export default MovieCard;
