import { createStore, createEvent } from 'effector';

export const setFailedToSendEmailStore = createEvent();
export const failedToSendEmailStore = createStore(false).on(
    setFailedToSendEmailStore,
    (_, data) => data
);
