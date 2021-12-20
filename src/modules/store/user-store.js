import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getUser = createEffect(async () => {
    const resp = await apiInvoker.user.get();
    return resp.data;
});

export const userStore = createStore({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    companyName: '',
    companyId: '',
    joinedDate: '',
});
userStore.on(getUser.doneData, (_, data) => {
    return data;
});
