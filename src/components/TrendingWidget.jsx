/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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

  return (
    <MarginVertical>
      <h1>Trending</h1>
      <button type="button" onClick={() => dispatch(setTime('day'))}>Today</button>
      <button type="button" onClick={() => dispatch(setTime('week'))}>Last Week</button>
      <Slider {...settings}>
        {movieData?.map((item) => (
          <MovieCard data={item} />
        ))}
      </Slider>
    </MarginVertical>
  );
}

export default TrendingWidget;
