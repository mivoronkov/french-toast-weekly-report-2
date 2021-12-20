import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { createStore, createEvent } from 'effector';

const setTokenTOStore = createEvent();
const tokenFromStore = createStore('').on(
    setTokenTOStore,
    (_, newToken) => newToken
);

export function APISetup() {
    const { getAccessTokenSilently } = useAuth0();
    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently();
                setTokenTOStore(token);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [getAccessTokenSilently]);
    return null;
}

const tokenHeader = (config) => {
    const token = tokenFromStore.getState();
    if (token !== '') {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};
const authError = (err) => {
    const status = err?.response?.status;
    if (status === 401) {
        //TODO something
    }
    return Promise.reject(err);
};

const instanceAPI = axios.create({
    //TODO create env_variable
    baseURL: 'https://localhost:5001/api/',
});
instanceAPI.interceptors.request.use(tokenHeader);
instanceAPI.interceptors.response.use((response) => response, authError);

export const apiInvoker = {
    companies: {
        async getAll() {
            return await instanceAPI.get('companies');
        },
        async create(companyName) {
            return await instanceAPI.post('companies', { name: companyName });
        },
        async update(companyId, companyName) {
            return await instanceAPI.put(`companies/${companyId}`, {
                name: companyName,
            });
        },
    },
    user: {
        async get() {
            return await instanceAPI.get('user');
        },
    },
    teamMember: {
        async getAll(companyId) {
            return await instanceAPI.get(`companies/${companyId}/members`);
        },
    },
};
