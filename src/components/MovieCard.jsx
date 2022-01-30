/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// query
import { useQuery } from 'react-query';
// icons
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
// components
import LikeAndBookmarkButton from './LikeAndBookmarkButton';
// css
import { Flex } from '../styles/baseStyles';
import {
  StyledCard,
  MovieLink,
  CardImg,
  CardBody,
  ReleaseDate,
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
      <Link to={`/movies/${movieData?.id}`}>
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
            <p>
              <Flex flexDirection="row" justify="flex-start">
                <BsFillCalendar2CheckFill color="#141E61" />
                {' '}
                <ReleaseDate>{movieData?.release_date}</ReleaseDate>
              </Flex>
            </p>
            {genres?.map((item, index) => (
              <span key={index}>
                {' '}
                <VscDebugBreakpointLog />
                {' '}
                {item.name}
              </span>
            ))}
            <p>
              {movieData.overview && movieData.overview.substring(0, 120)}
              ...
            </p>
          </div>
        </CardBody>
      </Link>
    </StyledCard>
  );
}

export default MovieCard;
