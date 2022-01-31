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
import { Flex, Margin } from '../styles/baseStyles';
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
import loadingGif from '../assets/img/gif.webp';

function MovieCard({ movieData, isLoading }) {
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
          {isLoading ? <img src={loadingGif} alt="" />
            : <img src={noPicture} alt={movieData?.title} />}
        </CardImg>
      </Link>
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
          <Link to={`/movies/${movieData?.id}`}>

            <Flex flexDirection="row" justify="flex-start">
              <Margin mb="1rem" mt="1rem">
                <BsFillCalendar2CheckFill color="#141E61" />
                {' '}
                <ReleaseDate>{movieData?.release_date}</ReleaseDate>
              </Margin>
            </Flex>
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
          </Link>
        </div>
      </CardBody>

    </StyledCard>
  );
}

export default MovieCard;
