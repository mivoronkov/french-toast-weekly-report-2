import { createStore, createEvent } from 'effector';

export const setErrorToStore = createEvent();
export const errorStore = createStore(null).on(
    setErrorToStore,
    (_, newError) => newError
);
