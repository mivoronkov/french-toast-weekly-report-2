import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';

export const instanceAPI = axios.create({
    //TODO create env_variable
    baseURL: 'https://localhost:5001/api/',
});

const authError = (err) => {
    const { status } = err.response;
    if (status === 401) {
        //TODO something
    }
    return Promise.reject(err);
};
export function APISetup() {
    const { getAccessTokenSilently } = useAuth0();
    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently();
                console.log(token);
                const tokenHeader = async (config) => {
                    if (token !== '') {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                    return config;
                };
                instanceAPI.interceptors.request.use(tokenHeader);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [getAccessTokenSilently]);
    return null;
}

instanceAPI.interceptors.response.use((response) => response, authError);
