import { apiEndpoint } from '../../src/config.json';
import httpService from './httpService';

const url = apiEndpoint + '/auth';

export function login(email, password) {
  return httpService.post(url, {
    email: email,
    password: password
  });
}
