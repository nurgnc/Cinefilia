import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/movieCategory';

function MoviesToggle() {
  const [toggle, setToggle] = useState(false);
  const popular = 'popular';
  const topRated = 'top_rated';
  const dispatch = useDispatch();

  return (
    <div
      onMouseLeave={() => setToggle(!toggle)}
      onMouseEnter={() => setToggle(!toggle)}
    >
      <button type="button">Movies</button>
      {toggle && (
        <div>
          <Link to={`/movie/${popular}`} onClick={() => dispatch(setCategory(popular))}>Popular</Link>
          <Link to={`/movie/${topRated}`} onClick={() => dispatch(setCategory(topRated))}>Top Rated</Link>
        </div>
      )}
    </div>
  );
}

export default MoviesToggle;
