import { createStore, createEvent } from 'effector';

export const waitingResponse = createEvent();

export const isWaitingResponse = createStore(false).on(
    waitingResponse,
    (_, status) => status
);
