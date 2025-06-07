import { BASE_URL } from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    // const token = sessionStorage.getItem("token")?.replaceAll('"', "");
    // if (token) {
    config.headers['Authorization'] =
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzM1YWEwZmM0NTA3NTUyNjNiMDFmYSIsImlhdCI6MTc0ODMxNzA0MiwiZXhwIjoxNzUwOTA5MDQyfQ.B2yrJ7KLcZj68n9qQ4Mh5vgeYUxj4bBXENHlMp1q5AQ`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
