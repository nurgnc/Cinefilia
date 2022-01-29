import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MoviesToggle() {
  const [toggle, setToggle] = useState(false);
  const popular = 'popular';
  const topRated = 'top_rated';

  return (
    <div
      onMouseLeave={() => setToggle(!toggle)}
      onMouseEnter={() => setToggle(!toggle)}
    >
      <div>Movies</div>
      {toggle && (
        <ul>
          <li>
            <Link to={`/movie/${popular}`}>Popular</Link>
          </li>
          <li>
            <Link to={`/movie/${topRated}`}>Top Rated</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MoviesToggle;
