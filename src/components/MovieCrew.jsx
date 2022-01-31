/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
// icons
import { BiMoviePlay } from 'react-icons/bi';
// query
import { useQuery } from 'react-query';
import { fetchCredit } from '../api';
// css
import {
  Flex, Grid, Margin, MarginVertical,
} from '../styles/baseStyles';
import { CrewElement, GrayText } from '../styles/Detail.styled';

function MovieCrew({ movieId, randomColor }) {
  const {
    data: movieCrew,
  } = useQuery(['movieCredits', movieId], () => fetchCredit(movieId), {
    select: (data) => data.data.crew,
  });

  const crew = movieCrew?.slice(0, 3);
  return (
    <MarginVertical>
      <Grid col={3}>
        {
          crew?.map((item, index) => (
            <CrewElement randomBorder={`#${randomColor[index]}`} key={index}>
              <h4>{item.name}</h4>
              <Flex flexDirection="row" align="center" justify="center">
                <Margin mr="5px"><BiMoviePlay size={20} /></Margin>
                <GrayText>{item.job}</GrayText>
              </Flex>
            </CrewElement>
          ))
        }
      </Grid>
    </MarginVertical>

  );
}

export default MovieCrew;
