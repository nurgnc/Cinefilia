/* eslint-disable react/prop-types */
import React from 'react';

function SearchPagination({ totalMovies, moviesPerPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button type="button" onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchPagination;
