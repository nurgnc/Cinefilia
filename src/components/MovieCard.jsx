/* eslint-disable react/prop-types */
import React from 'react';
// import { useQuery } from 'react-query';
// redux
import { useDispatch } from 'react-redux';
import { addLike, removeLike } from '../store/likes';
import {
  StyledCard,
  MovieLink,
  CardImg,
  CardBody,
} from '../styles/Card.styled';
import { img300 } from '../api';

function MovieCard({ movieData }) {
  // const { likes } = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log('-------likes', likes);

  return (
    <StyledCard key={movieData?.id}>
      <CardImg>
        <img src={`${img300}${movieData?.poster_path}`} alt={movieData?.title} />
      </CardImg>
      <CardBody>
        <MovieLink to={`/movies/${movieData?.id}`}>{movieData?.title}</MovieLink>
        <p>{movieData?.release_date}</p>
        <button type="button" onClick={() => dispatch(addLike(movieData.id))}>Like</button>
        <button type="button" onClick={() => dispatch(removeLike(movieData.id))}>UnLike</button>
      </CardBody>
    </StyledCard>
  );
}

export default MovieCard;
