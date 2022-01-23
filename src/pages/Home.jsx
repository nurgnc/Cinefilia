import React from 'react';
import { Container, HomeWrapper } from '../styles/baseStyles';
import { DiscoverWidget, MovieSearch, TrendingWidget } from '../components';

function Home() {
  return (
    <Container>
      <HomeWrapper />
      <MovieSearch />
      <DiscoverWidget />
      <TrendingWidget />
    </Container>
  );
}

export default Home;
