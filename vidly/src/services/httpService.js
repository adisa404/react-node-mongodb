import axios from 'axios';
import logService from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    // provjeriti jel radi sentry
    logService.log(error);
    toast.error('An unexpected error accured');
  }
  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
