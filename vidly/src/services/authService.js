import httpService from './httpService';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const url = '/auth';
const tokenKey = 'token';

httpService.setJwt(getJwt());

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

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
};
