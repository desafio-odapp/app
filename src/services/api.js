import axios from 'axios';
import qs from 'qs';

export const baseURL = 'https://desafio-odapp-api.glitch.me';

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  },
  transformRequest: [data => qs.stringify(data)],
});

export default api;