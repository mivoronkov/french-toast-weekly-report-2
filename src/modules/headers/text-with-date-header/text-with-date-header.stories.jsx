import React from 'react';
import { TextWithDateHeaderComponent } from './text-with-date-header.component';

export default {
    title: 'Elements/Headers/Text with date header',
    component: TextWithDateHeaderComponent,
};

const Template = (args) => <TextWithDateHeaderComponent {...args} />;
export const TextWithDateHeaderComponentTemplate = Template.bind({});
TextWithDateHeaderComponentTemplate.args = {
    companyName: 'ANKO Technologies Corp',
    joinedDate: 'January 2020',
};
