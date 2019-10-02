import React, { Component } from 'react';
//import { getGenres } from './../services/fakeGenreService';
const ListGroup = props => {
  const { items } = props;
  console.log(items);
  return <div></div>;

  //const genres = ['All Genres', ...getGenres()];
  //console.log(genres);
  // iskoristiti map i vidjeti da li se baremn rendaju
  //return <React.Fragment></React.Fragment>;
};

export default ListGroup;
