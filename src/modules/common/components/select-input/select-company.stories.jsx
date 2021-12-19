import React from 'react';
import { SelectCompany } from './select-company.component';

export default {
    title: 'Elements/Common/Company list',
    component: SelectCompany,
};

const Template = (args) => <SelectCompany {...args} />;
export const Companies = Template.bind({});
Companies.args = {
    companyList: [
        { companyId: 1, companyName: 'Sony' },
        { companyId: 5, companyName: 'Pony' },
        { companyId: 9, companyName: 'Kony' },
    ],
};
