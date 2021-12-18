import axios from 'axios';
import { tokenStore } from './auth-jwt-store';

const tokenHeader = (config) => {
    if (tokenStore.getState() !== '') {
        config.headers.Authorization = tokenStore;
    }
    return config;
};

export const instanceAPI = axios.create({
    baseURL: 'https://api/',
});

instanceAPI.interceptors.request.use(tokenHeader(conf));
