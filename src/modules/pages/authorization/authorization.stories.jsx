import React from 'react';
import { Authorization } from './authorization.component';

export default {
    title: 'Pages/Authorization',
    component: Authorization,
};

const Template = (args) => <Authorization {...args} />;
export const Page = Template.bind({});
