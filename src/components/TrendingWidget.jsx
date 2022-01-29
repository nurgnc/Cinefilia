/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
// slider package
import Slider from 'react-slick';
// api local
import { fetchTrending } from '../api';
// slider local
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsMainSlider } from './SliderSettings';
// components
import MovieCard from './MovieCard';
// css
import { MarginVertical } from '../styles/baseStyles';

function TrendingWidget() {
  const [time, setTime] = useState('day');

  const { data: movieData } = useQuery(['trendingMovie', time], () => fetchTrending(time), { select: (data) => data.data.results });

  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    setTrendingMovie(movieData);
  }, [movieData]);

  return (
    <MarginVertical>
      <h1>Trending</h1>
      <button
        type="button"
        onClick={() => {
          setTime('day');
        }}
      >
        Today

      </button>
      <button
        type="button"
        onClick={() => {
          setTime('week');
        }}
      >
        Last Week

      </button>
      <Slider {...settingsMainSlider}>
        {trendingMovie?.map((item, index) => (
          <MovieCard
            key={index}
            movieData={item}
          />
        ))}
      </Slider>
    </MarginVertical>
  );
}

export default TrendingWidget;
