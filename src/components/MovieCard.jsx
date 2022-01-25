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
// default img
import defaultImg from '../assets/img/no-img.jpg';

function MovieCard({ movieData, genres }) {
  // const { likes } = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log('-------likes', likes);
  const noPicture = movieData.poster_path === null ? `${defaultImg}` : `${img300}${movieData?.poster_path}`;

  return (
    <StyledCard key={movieData?.id}>
      <CardImg>
        <img src={noPicture} alt={movieData?.title} />
      </CardImg>
      <CardBody>
        <MovieLink to={`/movies/${movieData?.id}`}>{movieData?.title}</MovieLink>
        <p>{movieData?.release_date}</p>
        {genres?.map((item) => (
          <span>
            {item.name}
            {' '}
            ,
          </span>
        ))}
        <div>
          <button type="button" onClick={() => dispatch(addLike(movieData.id))}>Like</button>
          <button type="button" onClick={() => dispatch(removeLike(movieData.id))}>UnLike</button>
        </div>
      </CardBody>
    </StyledCard>
  );
}

export default MovieCard;
