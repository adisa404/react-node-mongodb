import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like onLike={() => this.props.onLike(movie)} liked={movie.liked} />
      )
    }, //like
    {
      key: 'delete',
      content: movie => (
        <button
          className='btn btn-danger btn-sm'
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    } //delete button
  ];
  render() {
    const { movies, onLike, onDelete, onSort, sortOption } = this.props;
    return (
      <table className='table'>
        <TableHeader
          columns={this.columns}
          sortOption={sortOption}
          onSort={onSort}
        />
        <TableBody
          data={movies}
          onLike={onLike}
          onDelete={onDelete}
          columns={this.columns}
        />
      </table>
    );
  }
}

export default MoviesTable;
