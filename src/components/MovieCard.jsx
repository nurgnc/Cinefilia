/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// query
import { useQuery } from 'react-query';
import LikeAndBookmarkButton from './LikeAndBookmarkButton';

// css
import { Flex } from '../styles/baseStyles';
import {
  StyledCard,
  MovieLink,
  CardImg,
  CardBody,
} from '../styles/Card.styled';
import { fetchGenres, img300 } from '../api';
// default img
import defaultImg from '../assets/img/no-img.jpg';

function MovieCard({ movieData }) {
  const { data: movieGenres } = useQuery(
    'movieGenres',
    fetchGenres,
    {
      select: (data) => data.data.genres,
    },
  );

  const genres = movieGenres?.filter((genre) => movieData?.genre_ids?.includes(genre.id));

  const noPicture = movieData.poster_path === null ? `${defaultImg}` : `${img300}${movieData?.poster_path}`;

  return (
    <StyledCard>
      <CardImg>
        <img src={noPicture} alt={movieData?.title} />
      </CardImg>
      <CardBody>
        <Flex flexDirection="row" justify="space-between" align="center">
          <LikeAndBookmarkButton
            id={movieData.id}
            title={movieData.title}
            noPicture={noPicture}
            releaseDate={movieData.release_date}
            genres={genres}
          />
        </Flex>
        <div>
          <MovieLink to={`/movies/${movieData?.id}`}>{movieData?.title}</MovieLink>
          <p>{movieData?.release_date}</p>
          {genres?.map((item, index) => (
            <span key={index}>
              {item.name}
              {' '}
              ,
            </span>
          ))}
        </div>
      </CardBody>
    </StyledCard>
  );
}

export default MovieCard;
