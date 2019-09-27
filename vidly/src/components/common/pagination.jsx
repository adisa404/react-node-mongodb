import React from 'react';
import _ from 'lodash';
// number of pages
// onclick highlight my page I display second batch of movies
// current page

const Pagination = props => {
  // itemsCount/pageSize = number of pages
  const { totalCount, pageSize, currentPage, onPageChange } = props;
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
              <a onClick={() => onPageChange(page)} className='page-link'>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
