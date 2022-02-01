import React from 'react';
// icons
import { BiCameraMovie } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
// css
import { Container, MarginVertical, Flex } from '../styles/baseStyles';
import { Title, ListContent } from '../styles/About.styled';

function About() {
  return (
    <Container height="80vh">
      <MarginVertical width="80%">
        <Flex flexDirection="column" justify="center" align="center">
          <div>
            <Title>Are you looking for a good movie to watch? This is the correct location!</Title>
            <ListContent>
              <li>
                <BiCameraMovie size={25} />
                On this site, you can locate the movies you`re looking for.
              </li>
              <li>
                <BiCameraMovie size={25} />
                You may add movies you enjoy to your favorites and add
                movies you watch to your watch list.

              </li>
              <li>
                <BiCameraMovie size={25} />
                You can sort the films you`re looking for by genre,
                release date, title, and popularity.

              </li>
              <li>
                <BiCameraMovie size={25} />
                You can examine the summary, crew members, actors,
                movie comments, and movies recommended to you by going
                to the specifics of the movie you wish to watch.

              </li>
            </ListContent>
            <h3>Technical Details</h3>
            <ListContent>
              <li>
                <FaLaptopCode size={25} />
                This is an UpSchool Front End Development Capstone Project for education.
              </li>
              <li>
                <FaLaptopCode size={25} />
                <a href="https://developers.themoviedb.org/4/getting-started/authorization">The movie database API</a>
                {' '}
                {' '}
                was used in the development of the application.
              </li>
              <li>
                <FaLaptopCode size={25} />
                React query and axios are used to pull data.
              </li>
              <li>
                <FaLaptopCode size={25} />
                To use the application, you must be logged in.
              </li>
              <li>
                <FaLaptopCode size={25} />
                On the site, you can see what`s popular and what`s new.
              </li>
              <li>
                <FaLaptopCode size={25} />
                Both the homepage and the navbar have a search bar
                where you may find the video you`re looking for.

              </li>
              <li>
                <FaLaptopCode size={25} />
                The navbar can also be used to reach popular and top-rated categories.
              </li>
              <li>
                <FaLaptopCode size={25} />
                The movies on the category page can be sorted and
                filtered in a variety of ways.

              </li>
              <li>
                <FaLaptopCode size={25} />
                The movie overview, crew, actors, comments,
                and suggestions are presented on the detail page
                when each movie is clicked.

              </li>
              <li>
                <FaLaptopCode size={25} />
                The user has the option of adding the item to their favorites or seenlist.
              </li>
              <li>
                <FaLaptopCode size={25} />
                All of this data flow is managed using Redux.
              </li>
              <li>
                <FaLaptopCode size={25} />
                All of the user`s information is saved locally.
              </li>
            </ListContent>
            <h3>
              I used these technologies :
            </h3>
            <ListContent>
              <li>
                <VscDebugBreakpointLog size={25} />
                React
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Redux
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Redux Persist
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                React Router Dom
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                React Query
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Axios
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                TMDB API
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Styled Component
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Slick Slider
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Debounce
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Custom Pagination
              </li>
              <li>
                <VscDebugBreakpointLog size={25} />
                Eslint Airbnb standarts
              </li>
            </ListContent>
          </div>
        </Flex>
      </MarginVertical>
    </Container>
  );
}

export default About;
