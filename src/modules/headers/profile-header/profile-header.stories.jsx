import React from 'react';
import { ProfileHeaderComponent } from './profile-header.component';

export default {
    title: 'Elements/Headers/Profile header',
    component: ProfileHeaderComponent,
};

const Template = (args) => <ProfileHeaderComponent {...args} />;
export const HeaderLaunchGuideTemplate = Template.bind({});
HeaderLaunchGuideTemplate.args = {
    first_name: 'Anatoliy',
    last_name: 'Kolodkin',
    email: 'anatoliy@ankosoftware.com',
    avatar_path: null,
};
