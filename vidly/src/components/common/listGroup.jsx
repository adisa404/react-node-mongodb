import React, { Component } from 'react';
//import { getGenres } from './../services/fakeGenreService';
const ListGroup = props => {
  const { items } = props;
  console.log(items);
  return (
    <ul className='list-goup'>
      {items.map(item => (
        <li key={item._id} className='list-group-item'>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
