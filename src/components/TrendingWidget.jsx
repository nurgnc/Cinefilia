/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
// redux package
import { useSelector, useDispatch } from 'react-redux';
// slider package
import Slider from 'react-slick';
// api local
import { fetchTrending } from '../api';
// redux local
import { setTime } from '../store/trendingTime';
// slider local
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from './SliderSettings';
// components
import MovieCard from './MovieCard';
// css
import { MarginVertical } from '../styles/baseStyles';

function TrendingWidget() {
  const { time } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { data: movieData } = useQuery('trendingMovie', () => fetchTrending(time), { select: (data) => data.data.results });

  const [trendingMovie, setTrendingMovie] = useState(movieData);
  // console.log('time::::', time);
  // console.log('moviedata', movieData);

  return (
    <MarginVertical>
      <h1>Trending</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(setTime('day'));
          setTrendingMovie(movieData);
          console.log('day');
        }}
      >
        Today

      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setTime('week'));
          setTrendingMovie(movieData);
          console.log('week');
        }}
      >
        Last Week

      </button>
      <Slider {...settings}>
        {trendingMovie?.map((item) => (
          <MovieCard movieData={item} />
        ))}
      </Slider>
    </MarginVertical>
  );
}

export default TrendingWidget;
