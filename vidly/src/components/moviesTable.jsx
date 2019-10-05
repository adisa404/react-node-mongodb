import React, { Component } from 'react';
import Like from './common/like';
class MoviesTable extends Component {
  raiseSort = sortBy => {
    const sortOption = { ...this.props.sortOption };
    if (sortOption.sortBy === sortBy) {
      sortOption.sortOrder = sortOption.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortOption.sortBy = sortBy;
      sortOption.sortOrder = 'asc';
    }

    this.props.onSort(sortOption);
  };
  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th onClick={() => this.raiseSort('title')}>Title</th>
            <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
            <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
            <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
            <th></th>
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onLike={() => onLike(movie)} liked={movie.liked} />
              </td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
