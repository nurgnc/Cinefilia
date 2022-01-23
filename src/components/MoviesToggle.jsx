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
      <button type="button">Movies</button>
      {toggle && (
        <div>
          <Link to={`/movie/${popular}`}>Popular</Link>
          <Link to={`/movie/${topRated}`}>Top Rated</Link>
        </div>
      )}
    </div>
  );
}

export default MoviesToggle;
