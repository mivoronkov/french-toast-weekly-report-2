import React from 'react';
import { AuthorizationContent } from './authorization-content.component';

export default {
    title: 'Pages/Authorization',
    component: AuthorizationContent,
};

const Template = (args) => <AuthorizationContent {...args} />;
export const Content = Template.bind({});
