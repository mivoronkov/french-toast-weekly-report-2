import React from 'react';
import { NewCompanyRegistration } from './register-new-company.component';

export default {
    title: 'Pages/Register new company',
    component: NewCompanyRegistration,
};

const Template = (args) => <NewCompanyRegistration {...args} />;
export const RegisterCompany = Template.bind({});
