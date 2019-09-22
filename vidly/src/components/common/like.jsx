import React from 'react';

const Like = props => {
  const heartIcon = 'fa fa-heart';
  const classes = props.liked ? heartIcon : heartIcon + '-o';
  return (
    <i
      onClick={props.onLike}
      className={classes}
      style={{ cursor: 'pointer' }}
    ></i>
  );
};

export default Like;
