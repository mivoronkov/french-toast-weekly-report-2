import React from 'react';
import { MyCompanyComponent } from './my-company.component';

export default {
    title: 'Pages/My company',
    component: MyCompanyComponent,
};

const Template = (args) => <MyCompanyComponent {...args} />;
export const MyCompanyTemplate = Template.bind({});
MyCompanyTemplate.args = {
    companyName: 'ANKO Technologies Corp',
    joinedDate: new Date(2020, 1),
};
