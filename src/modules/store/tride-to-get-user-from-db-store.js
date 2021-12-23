import { createStore, createEvent } from 'effector';

export const setTriedGetUserFromDBToStore = createEvent();
export const triedGetUserFromDBStore = createStore(false).on(
    setTriedGetUserFromDBToStore,
    (_, newTriedGetUserFromDB) => newTriedGetUserFromDB
);
