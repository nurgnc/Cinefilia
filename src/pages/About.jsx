import React from 'react';
// css
import { Container, MarginVertical } from '../styles/baseStyles';

function About() {
  return (
    <Container height="80vh">
      <MarginVertical>
        <div>
          <div>
            <p>This project includes the characters and features of the Rick and Morty series.</p>
            <p>
              This is the API service I use:
              {' '}
              <a href="https://developers.themoviedb.org/4/getting-started/authorization">The Rick and Morty API</a>
            </p>
            <p>
              This assignment was built with React JS.
              My goal was to create a website using data from a public API service.
              {' '}

            </p>
            <h6>
              Details :
            </h6>
            <ul>
              <li>
                Find details about the series and API on the main page,
                and you can search with the character name you want.

              </li>
              <li>View the characters of the series on the characters page</li>
              <li>Access character information by clicking on each character.</li>
            </ul>
            <h6>
              I used these technologies :
            </h6>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Redux Persist</li>
              <li>React Router Dom</li>
              <li>React Query</li>
              <li>Axios</li>
              <li>TMDB API</li>
              <li>Styled Components</li>
              <li>Slick Slider</li>
              <li>Debounce</li>
              <li>Custom Pagination</li>
              <li>Eslint Airbnb standarts</li>
            </ul>
          </div>
        </div>
      </MarginVertical>
    </Container>
  );
}

export default About;
