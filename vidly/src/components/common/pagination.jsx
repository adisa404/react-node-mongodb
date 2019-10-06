import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
// number of pages
// onclick highlight my page I display second batch of movies
// current page

const Pagination = ({ totalCount, pageSize, currentPage, onPageChange }) => {
  // itemsCount/pageSize = number of pages
  const pagesCount = Math.ceil(totalCount / pageSize);
  if (pagesCount === 1) return null;

  // we create the pages array with lodash
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className='pagination'>
        {pages.map(page => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <button onClick={() => onPageChange(page)} className='page-link'>
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
