import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';
import Like from './common/like';
import auth from '../services/authService';

class MoviesTable extends Component {
  columns = [
    {
      path: 'title',
      label: 'Title',
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like onLike={() => this.props.onLike(movie)} liked={movie.liked} />
      )
    }
  ];

  deleteColumn = {
    key: 'delete',
    content: movie =>
      auth.getCurrentUser() && (
        <button
          className='btn btn-danger btn-sm'
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
  };
  constructor() {
    super();
    const currentUser = auth.getCurrentUser();
    if (currentUser) this.columns.push(this.deleteColumn);
  }
  render() {
    const { movies, onSort, sortOption } = this.props;
    return (
      <Table
        sortOption={sortOption}
        columns={this.columns}
        data={movies}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
