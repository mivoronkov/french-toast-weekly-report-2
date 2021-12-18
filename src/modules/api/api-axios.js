import axios from 'axios';
import { tokenStore } from './auth-jwt-store';

const tokenHeader = (config) => {
    const token = tokenStore.getState();
    if (token !== '') {
        config.headers.Authorization = token;
    }
    return config;
};

export const instanceAPI = axios.create({
    baseURL: 'https://api/',
});

instanceAPI.interceptors.request.use(tokenHeader(conf));
