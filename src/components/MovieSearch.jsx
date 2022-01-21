import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//icons
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

function MovieSearch() {
  const location = useLocation();
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const [UrlQ, setUrlQ] = useState(urlParams.get("query"));
  console.log("UrlQ", UrlQ);

  function formHandler(event) {
    event.preventDefault();
    const inputValue = event.target.name.value;
    console.log("inputValue:::", inputValue);
    if (inputValue === "") return false;
    setUrlQ(inputValue);
    // navigate(`/search?query=${inputValue}`);
  }

  // useEffect(() => {
  //   if (location?.search?.length === 0) {
  //     setUrlQ("");
  //   }
  // }, [location, UrlQ]);

  const results = <h4>Search movie: "{UrlQ}" </h4>;

  return (
    <>
      <form onSubmit={formHandler}>
        <div>
          <input
            name="query"
            type="text"
            id="search"
            defaultValue={UrlQ}
            placeholder="Search character..."
          />
          <button type="submit">
            <AiOutlineSearch size={25} />
          </button>
          <button type="reset">
            <AiOutlineCloseCircle size={25} />
          </button>
        </div>
      </form>
      {UrlQ && results}
    </>
  );
}

export default MovieSearch;
