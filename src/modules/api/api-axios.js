import axios from 'axios';

const tokenHeader = (config) => {
    let token = localStorage.getItem('french-toast');
    if (token.exp < Date.now()) {
        localStorage.removeItem('french-toast');
        //TODO logout
        token = '';
    }
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
