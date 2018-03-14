import React from 'react';
import ItemUser from '../../components/ItemUser';
import Pagination from  '../../components/Pagination';


export default (props) => {
  const  {
    data,
    usersAll,
    currentPage,
    handlePagination,
  } = props;

  const  colPages = usersAll ? Math.ceil(usersAll.length /15) : 0;

  return (
    <div className='usersList'>
      <div className="usersList__head">
        <div className='avatar'>
          <p>Avatar:</p>
        </div>
        <div>
          <p>Name:</p>
        </div>
        <div>
          <p>Age:</p>
        </div>
        <div>
          <p>Phone:</p>
        </div>
      </div>

      {
        data && data.length > 0 &&
        data.map((item, index) =>
        <ItemUser
          key={index}
          updateApp={props.updateApp}
          {...item}
        />)
      }

      {
        colPages > 1 &&
          <Pagination
            colPages = {colPages}
            currentPage = {currentPage}
            handlePagination = {handlePagination}
          />
      }
    </div>
  );
}