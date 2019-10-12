import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class MoviesList extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortOption: { sortBy: 'title', sortOrder: 'asc' }
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres
    });
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
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = sortOption => {
    this.setState({ sortOption: sortOption });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
      sortOption
    } = this.state;

    const filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter(m => m.genre.name === currentGenre.name)
        : allMovies;

    const sorted = sortOption
      ? _.orderBy(filtered, sortOption.sortBy, sortOption.sortOrder)
      : filtered;
    const movies = paginate(sorted, currentPage, pageSize, currentGenre);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortOption } = this.state;

    const { totalCount, data: movies } = this.getPageData();
    if (count === 0) return <p>There are no movies in the list</p>;

    return (
      <div className='row'>
        <div className='col-2'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.currentGenre}
            onItemSelect={this.handleItemSelect}
          ></ListGroup>
        </div>
        <div className='col'>
          <Link to='/movies/new'>
            <div className='btn btn-primary mb-4'>New Movie</div>
          </Link>
          <p>There are {totalCount} movies in the list</p>
          <MoviesTable
            movies={movies}
            sortOption={sortOption}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            totalCount={totalCount}
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
