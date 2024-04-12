import http from '../http-common';

export const getUsersByRole = (role) => {
  return http.get(`/users/${role}`);
};
