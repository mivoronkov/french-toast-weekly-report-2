import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const tokenHeader = async (config) => {
    //TODO fix token
    /* const { getAccessTokenSilently } = useAuth0();
   /*  let token = await getAccessTokenSilently();*/
    let tokenJSON = localStorage.getItem(localStorage.key(0));
    let token = JSON.parse(tokenJSON)?.body?.access_token;
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
    //TODO create env_variable
    baseURL: 'https://localhost:5001/api/',
});

instanceAPI.interceptors.request.use(tokenHeader);
instanceAPI.interceptors.response.use((response) => response, authError);
