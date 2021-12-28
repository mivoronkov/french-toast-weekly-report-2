import { createStore, createEvent } from 'effector';

export const setInviteSuccessMessageLinkToStore = createEvent();
export const inviteSuccessMessageLinkStore = createStore(null).on(
    setInviteSuccessMessageLinkToStore,
    (_, data) => data
);
