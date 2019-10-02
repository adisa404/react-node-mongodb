import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';

class MoviesList extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: []
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  // arrow funnction to bind to counstructor
  handleDelete = movie => {
    //get all movies except the deleted one + update the state
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    //movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleItemSelect = genre => {
    //this.setState()
    console.log(genre);
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);
    if (count === 0) return <p>There are no movies in the list</p>;

    return (
      <div className='row'>
        <div className='col-2'>
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleItemSelect}
          ></ListGroup>
        </div>
        <div className='col'>
          <p>There are {count} movies in the list</p>
          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
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
                    <Like
                      onLike={() => this.handleLike(movie)}
                      liked={movie.liked}
                    />
                  </td>
                  <td>
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MoviesList;
