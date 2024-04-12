import http from '../http-common';

export const createAccount = (data) => {
  return http.post('/signup', data);
};

export const updateAccount = (cid,data) => {
  return http.put(('/users/'+cid), data);
};

export const getAccount = (cid) => {
  return http.get(('/users/'+cid));
};