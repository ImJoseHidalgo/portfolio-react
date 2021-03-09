import React from 'react';
import { ListContainer, LinkP } from './Pagination.styles';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ListContainer>
      {pageNumbers.map(number => (
        <span key={number}>
          <LinkP to='/home' onClick={() => paginate(number)}>
            {number}
          </LinkP>
        </span>
      ))}
      <h3>Mostrando la página: {currentPage}</h3>
    </ListContainer>
  );
};

export default Pagination;