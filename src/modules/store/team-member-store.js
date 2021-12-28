import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getMembers = createEffect(async (companyId) => {
    const resp = await apiInvoker.teamMember.getAll(companyId);
    return resp.data;
});

export const createMember = createEffect(
    async ({
        companyId,
        firstName,
        lastName,
        title,
        email,
        sub,
        companyName,
    }) => {
        const resp = await apiInvoker.teamMember.createMember(
            companyId,
            firstName,
            lastName,
            title,
            email,
            sub,
            companyName
        );
        return resp.data;
    }
);

export const membersStore = createStore([]);
membersStore.on(getMembers.doneData, (_, data) => {
    return data;
});
