import React from 'react';
import { ListContainer, LinkP } from './Pagination.styles';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ListContainer>
      <h3>Mostrando la página:</h3>
      {pageNumbers.map(number => (
        <span key={number}>
          <LinkP to={number === 1 ? '/blog' : `/blog/${number}`} onClick={() => paginate(number)}>
            {number}
          </LinkP>
        </span>
      ))}
    </ListContainer>
  );
};

export default Pagination;