/* eslint-disable react/prop-types */
import React from 'react';
// icons
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
// css
import { Flex } from '../styles/baseStyles';
import { Paginate, PageButton } from '../styles/InputsAndButtons.styled';

function SearchPagination({
  totalMovies, moviesPerPage, paginate, currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <Flex flexDirection="row" align="center" justify="center">
      <Paginate>
        <li><AiOutlineDoubleLeft size={25} onClick={() => paginate(currentPage - 1)} /></li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <PageButton type="button" active={currentPage === number ? 'active' : ''} onClick={() => paginate(number)}>
              {number}
            </PageButton>
          </li>
        ))}
        <li><AiOutlineDoubleRight size={25} onClick={() => paginate(currentPage + 1)} /></li>
      </Paginate>
    </Flex>
  );
}

export default SearchPagination;
