import httpService from './httpService';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const url = '/users';

export function register(user) {
  return httpService.post(url, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
