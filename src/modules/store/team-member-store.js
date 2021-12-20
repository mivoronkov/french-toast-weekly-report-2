import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getMembers = createEffect(async (companyId) => {
    const resp = await apiInvoker.teamMember.getAll(companyId);
    return resp.data;
});

export const membersStore = createStore([]);
membersStore.on(getMembers.doneData, (_, data) => {
    return data;
});
