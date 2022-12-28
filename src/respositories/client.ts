import axios from 'axios';

const BASE_URL = 'https://639b5ed231877e43d68ac524.mockapi.io/api/';

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
