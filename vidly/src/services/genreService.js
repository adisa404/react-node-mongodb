import httpService from './httpService';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function getGenres() {
  return httpService.get('/genres');
}
