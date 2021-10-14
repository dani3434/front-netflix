import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendnode34.herokuapp.com',
});

export default api;
