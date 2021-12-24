import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getCompany = createEffect(async (companyId) => {
    const resp = await apiInvoker.companies.get(companyId);
    return resp.data;
});

export const companyStore = createStore({
    name: '',
    joinedDate: '',
    companyId: '',
});
companyStore.on(getCompany.doneData, (_, data) => {
    return data;
});
