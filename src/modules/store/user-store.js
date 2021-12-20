import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getUser = createEffect(async () => {
    try {
        const resp = await apiInvoker.user.get();
        return resp.data;
    } catch (error) {
        return error;
    }
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
userStore.on(getUser.doneData, (state, data) => {
    if (data instanceof Error) {
        return state;
    }
    return data;
});
