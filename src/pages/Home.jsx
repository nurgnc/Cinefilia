import React from 'react';
import { Container, HomeWrapper } from '../styles/baseStyles';
import { MovieSearch } from '../components';

function Home() {
  return (
    <Container>
      <HomeWrapper />
      <MovieSearch />
    </Container>
  );
}

export default Home;
