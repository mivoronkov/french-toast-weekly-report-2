import React from 'react';

import { ProfileHeaderComponent } from '../../modules/headers/profile-header/profile-header.component';

export default {
    title: 'My reports',
    component: ProfileHeaderComponent,
};

const Template = (args) => <ProfileHeaderComponent {...args} />;
export const MyReportsHeader = Template.bind({});
MyReportsHeader.args = {
    first_name: 'Anatoliy',
    last_name: 'Kolodkin',
    email: 'anatoliy@ankosoftware.com',
    avatar_path: null,
};
