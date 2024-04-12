import http from '../http-common';

export const jobs = (data) => {
  return http.post('/jobs', data);
};

export const customerJobs = (custId) => {
  return http.get('/jobs/customer/' + custId);
};
