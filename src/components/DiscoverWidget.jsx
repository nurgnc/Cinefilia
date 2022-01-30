/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
// packages
import { useQuery } from 'react-query';
import Slider from 'react-slick';
// aos
import Aos from 'aos';
import 'aos/dist/aos.css';
// local import
import { fetchDiscover } from '../api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsMainSlider } from './SliderSettings';
// components
import MovieCard from './MovieCard';
// css
import { MarginVertical } from '../styles/baseStyles';

function DiscoverWidget() {
  const { data: movieData, isLoading } = useQuery('discoverMovie', fetchDiscover, {
    select: (data) => data.data.results,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MarginVertical>
      <h1>Discover</h1>
      <div data-aos="fade-right">
        <Slider {...settingsMainSlider}>
          {movieData?.map((item, index) => (
            <MovieCard
              key={index}
              movieData={item}
              isLoading={isLoading}
            />
          ))}
        </Slider>
      </div>
    </MarginVertical>
  );
}

export default DiscoverWidget;
