import axios from 'axios';

console.log(process.env.BACKEND_URL);

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/'
})