import React from 'react';
import { AuthorizationInput } from './authorization-input.component';

export default {
    title: 'Elements/Common/Authorization input',
    component: AuthorizationInput,
};

const Template = (args) => <AuthorizationInput {...args} />;
export const Authorization = Template.bind({});
Authorization.args = {
    inputText: 'input',
};
