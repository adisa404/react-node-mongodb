import { apiEndpoint } from '../../src/config.json';
import httpService from './httpService';
import jwtDecode from 'jwt-decode';

const url = apiEndpoint + '/auth';
const tokenKey = 'token';

export async function login(email, password) {
  const { data: jwt } = await httpService.post(url, {
    email: email,
    password: password
  });

  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt
};
