import axios from 'axios';

const api = axios.create({
    baseURL: 'https://potfolio.redirectme.net', // 'http://localhost:3333',
});

export default api;
