import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// icons
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
// debounce perform
// import debounce from 'lodash.debounce';

function MovieSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  // const [search, setSearch] = useState('');

  const urlParams = new URLSearchParams(location.search);
  const [UrlQ, setUrlQ] = useState(urlParams.get('name'));

  const formHandler = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value;
    // console.log(inputValue);
    setUrlQ(inputValue);
    navigate(`/search?name=${inputValue.toLowerCase()}`);
  };

  // const debouncedOnChange = debounce(formHandler, 3000);

  // const results = (
  //   <h4>
  //     {' '}
  //     Search movie:
  //     {' '}
  //     {' '}
  //   </h4>
  // );

  return (
    <>
      <div>
        <form onSubmit={formHandler}>
          <input
            name="name"
            type="text"
            id="search"
            // onChange={debouncedOnChange}
            defaultValue={UrlQ}
            placeholder="Search character..."
          />
          <button onClick={() => formHandler()} type="button">
            <AiOutlineSearch size={25} />
          </button>
          <button type="button">
            <AiOutlineCloseCircle size={25} />
          </button>
        </form>
      </div>
      {/* {UrlQ && results} */}
    </>
  );
}

export default MovieSearch;
