import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.modery.com.br/',
});

export default api;
