import { useState } from "react";
import { Link } from "react-router-dom";

const MoviesToggle = () => {
  const [toggle, setToggle] = useState(false);
  const popular = "popular";
  const top_rated = "top_rated";

  return (
    <div
      onMouseLeave={() => setToggle(!toggle)}
      onMouseEnter={() => setToggle(!toggle)}
    >
      <button>Movies</button>
      {toggle && (
        <div>
          <Link to={`/movie/${popular}`}>Popular</Link>
          <Link to={`/movie/${top_rated}`}>Top Rated</Link>
        </div>
      )}
    </div>
  );
};

export default MoviesToggle;
