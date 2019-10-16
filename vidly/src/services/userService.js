import { apiEndpoint } from '../../src/config.json';
import httpService from './httpService';

const url = apiEndpoint + '/users';

export function register(user) {
  return httpService.post(url, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
