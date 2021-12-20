import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getCompanies = createEffect(async () => {
    const resp = await apiInvoker.companies.getAll();
    return resp.data;
});
export const createCompany = createEffect(async (companyName) => {
    const resp = await apiInvoker.companies.create(companyName);
    await getCompanies();
    return resp.data;
});
export const companyStore = createStore([]);
companyStore.on(getCompanies.doneData, (_, data) => {
    return data;
});
