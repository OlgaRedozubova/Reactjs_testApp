import React from 'react';

export default props => {
  return (
    <div className='dropdown'>
      <button
        className='dropdown__head'
        onClick={props.isContentDropdown}
      >
        {props.title}
      </button>

      {
     //   props.isOpenDropdown.includes(props.id) &&
        props.isOpenDropdown &&
        <div className='dropdown__content'>
          DropdownContent
        </div>
      }
    </div>
  );
}