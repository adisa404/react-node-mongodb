import React from 'react';

const SearchBox = ({ onChange }) => {
  return (
    <div className='form-group'>
      <input className='form-control' onChange={onChange} />
    </div>
  );
};

export default SearchBox;
