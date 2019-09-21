import React, { Component } from 'react';

class Like extends Component {
  render() {
    return (
      <i
        onClick={this.props.onLike}
        className={this.getClassName()}
        style={{ cursor: 'pointer' }}
      ></i>
    );
  }

  getClassName() {
    const heartIcon = 'fa fa-heart';
    return this.props.liked ? heartIcon : heartIcon + '-o';
  }
}

export default Like;
