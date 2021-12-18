import axios from 'axios';
import { tokenStore } from './auth-jwt-store';

const tokenHeader = (config) => {
    const token = tokenStore.getState();
    if (token !== '') {
        config.headers.Authorization = token;
    }
    return config;
};
const authError = (err) => {
    const { status } = err.response;
    if (status === 401) {
        //TODO something
    }
    return Promise.reject(err);
};

export const instanceAPI = axios.create({
    baseURL: 'https://api/',
});

instanceAPI.interceptors.request.use(tokenHeader);
instanceAPI.interceptors.response.use((response) => response, authError);
