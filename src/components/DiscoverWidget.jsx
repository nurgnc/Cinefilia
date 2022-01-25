/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// packages
import { useQuery } from 'react-query';
import Slider from 'react-slick';
// local import
import { fetchDiscover, fetchGenres } from '../api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsMainSlider } from './SliderSettings';
// components
import MovieCard from './MovieCard';
// css
import { MarginVertical } from '../styles/baseStyles';

function DiscoverWidget() {
  const { data: movieData } = useQuery('discoverMovie', fetchDiscover, {
    select: (data) => data.data.results,
  });

  const { data: movieGenres } = useQuery(
    'movieGenres',
    fetchGenres,
    {
      select: (data) => data.data.genres,
    },
  );

  return (
    <MarginVertical>
      <h1>Discover</h1>
      <Slider {...settingsMainSlider}>
        {movieData?.map((item) => (
          <MovieCard
            movieData={item}
            genres={movieGenres
              ?.filter((genre) => item?.genre_ids?.includes(genre.id))}
          />
        ))}
      </Slider>
    </MarginVertical>
  );
}

export default DiscoverWidget;
