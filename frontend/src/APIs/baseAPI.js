import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:1403'
});

export default api;