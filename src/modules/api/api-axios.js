import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const tokenHeader = async (config) => {
    const { getAccessTokenSilently } = useAuth0();
    let token = await getAccessTokenSilently();
    if (token !== '') {
        config.headers.Authorization = `Bearer ${token}`;
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
