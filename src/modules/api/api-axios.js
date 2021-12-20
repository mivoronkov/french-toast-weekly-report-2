import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { createStore, createEvent } from 'effector';

export const setTokenTOStore = createEvent();
const tokenFromStore = createStore('').on(
    setTokenTOStore,
    (_, newToken) => newToken
);

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
    timeout: 9000,
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
    teamMember: {
        async getAll(companyId) {
            return await instanceAPI.get(`companies/${companyId}/members`);
        },
        async createMember(
            companyId,
            firstName,
            lastName,
            title,
            email,
            sub,
            companyName,
            inviteLink
        ) {
            return await instanceAPI.post(`companies/${companyId}/members`, {
                id: 0,
                firstName: firstName,
                lastName: lastName,
                title: title,
                email: email,
                sub: sub,
                companyName: companyName,
                companyId: companyId,
                inviteLink: inviteLink,
            });
        },
    },
    user: {
        async get() {
            return await instanceAPI.get('user');
        },
    },
};
