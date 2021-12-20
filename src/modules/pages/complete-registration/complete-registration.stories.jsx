import React from 'react';
import { CompleteRegistration } from './complete-registration.component';

export default {
    title: 'Pages/Complete registration',
    component: CompleteRegistration,
};

const Template = (args) => <CompleteRegistration {...args} />;
export const Page = Template.bind({});
