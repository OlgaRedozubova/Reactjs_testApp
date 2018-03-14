import React from 'react';

export default (props) => {

  const {
    colPages,
    currentPage,
    handlePagination,
  } = props;

  let pagesList= [];

  for (let i = 0; i < colPages; i++) {
    pagesList.push(
      <li
        className={`page-item ${currentPage === i ? 'active' : ''}`}
        key={i} >
        <a
          className="page-link"
          href="#"
          onClick={() => handlePagination(i - currentPage)}>{i+1}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul className="pagination">
        <li
          className={`page-item ${currentPage > 0 ? '' : 'disabled'}`}>
          <a
            className='page-link'
            href="#"
            onClick={() => handlePagination(-1)}>
            Previous
          </a>
        </li>

        {pagesList}

        <li
          className={`page-item ${currentPage < colPages-1 ? '' : 'disabled'}`}>
          <a
            className="page-link"
            href="#"
            onClick={() => handlePagination(1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}