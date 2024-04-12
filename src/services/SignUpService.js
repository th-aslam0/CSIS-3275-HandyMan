import http from '../http-common';

export const createAccount = (data) => {
  return http.post('/signup', data);
};
