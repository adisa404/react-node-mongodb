import httpService from './httpService';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const url = '/movies';

function movieUrl(id) {
  return `${url}/${id}`;
}

export function getMovies() {
  return httpService.get(url);
}

export function getMovie(id) {
  return httpService.get(movieUrl(id));
}

export function saveMovie(movie) {
  // if the movie has an Id - update it and get rid of the id
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(movieUrl(movie._id), body);
  }
  debugger;
  return httpService.post(url, movie);
}

export function deleteMovie(id) {
  return httpService.delete(movieUrl(id));
}
