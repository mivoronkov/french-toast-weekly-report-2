import { addDecorator } from '@storybook/react';
import '../src/styles/main.scss';
import 'bootstrap';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));
