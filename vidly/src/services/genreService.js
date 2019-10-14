import httpService from './httpService';
import { apiEndpoint } from '../../src/config.json';

export function getGenres() {
  return httpService.get(apiEndpoint + '/genres');
}
