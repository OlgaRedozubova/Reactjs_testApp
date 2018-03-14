import React from 'react';

export default (props) => {

  return (
    <div className='rowSorting'>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.sort('name')}
      >
        <i
          className={`fa fa-sort-alpha-${!props.sortType['name']?'desc':'asc'}`}
        ></i>


        <p className='btnName'>Name</p>
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.sort('age')}
      >
        <i
          className={`fa fa-sort-numeric-${!props.sortType['age']?'desc':'asc'}`}
        ></i>
        <p className='btnName'>Age</p>
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => props.reset()}
      >
        <i className="fa fa-ban"></i>
        <p className='btnName'>Reset</p>
      </button>
    </div>
  )
}