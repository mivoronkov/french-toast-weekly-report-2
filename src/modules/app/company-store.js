import { createStore, createEffect } from 'effector';
import { instanceAPI } from '../api/api-axios';

export const getCompanies = createEffect(async () => {
    const resp = await instanceAPI.get('companies');
    return resp.data;
});
export const createCompany = createEffect(async (companyName) => {
    const resp = await instanceAPI.post('companies', { name: companyName });
    console.log(resp);
    await getCompanies();
    return resp.data;
});
export const companyStore = createStore([]);
companyStore.on(getCompanies.doneData, (_, data) => {
    return data;
});
