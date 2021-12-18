import { createEvent, createStore } from 'effector';

export const setToken = createEvent();
export const resetToken = createEvent();

export const tokenStore = createStore('')
    .on(setToken, (_, payload) => payload)
    .reset(resetToken);
