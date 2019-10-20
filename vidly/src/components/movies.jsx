import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { getMovies, deleteMovie } from '../services/movieService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/genreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';

class MoviesList extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortOption: { sortBy: 'title', sortOrder: 'asc' },
    searchQuery: null
  };

  async componentDidMount() {
    const { data } = await getGenres();
    console.log(data);
    const genres = [{ _id: '', name: 'All Genres' }, ...data];

    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }
  // arrow funnction to bind to counstructor
  handleDelete = async movie => {
    const originalMovies = this.state.movies;

    //get all movies except the deleted one + update the state
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error('This movie has already been deleted.');

        // undo changes
        this.setState({ movies: originalMovies });
      }
    }
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

  handleSearch = event => {
    console.log('handleSearch', event.target.value);
    this.setState({ searchQuery: event.target.value, currentGenre: null });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
      sortOption,
      searchQuery
    } = this.state;

    let filtered = [];
    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().includes(searchQuery)
      );
    else if (currentGenre && currentGenre._id)
      filtered = allMovies.filter(m => m.genre.name === currentGenre.name);
    else filtered = allMovies;

    const sorted = sortOption
      ? _.orderBy(filtered, sortOption.sortBy, sortOption.sortOrder)
      : filtered;
    const movies = paginate(sorted, currentPage, pageSize, currentGenre);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortOption } = this.state;
    const { user } = this.props;
    console.log('user', user);

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
          {user && (
            <Link to='/movies/new'>
              <div className='btn btn-primary mb-4'>New Movie</div>
            </Link>
          )}
          <p>There are {totalCount} movies in the list</p>
          <SearchBox onChange={this.handleSearch} />
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
