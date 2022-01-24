/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// packages
import { useQuery } from 'react-query';
import Slider from 'react-slick';
// local import
import { fetchDiscover } from '../api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './SliderSettings';
// components
import MovieCard from './MovieCard';
// css
import { MarginVertical } from '../styles/baseStyles';

function DiscoverWidget() {
  const { data: movieData } = useQuery('discoverMovie', fetchDiscover, {
    select: (data) => data.data.results,
  });

  return (
    <MarginVertical>
      <h1>Discover</h1>
      <Slider {...settings}>
        {movieData?.map((item) => (
          <MovieCard movieData={item} />
        ))}
      </Slider>
    </MarginVertical>
  );
}

export default DiscoverWidget;
