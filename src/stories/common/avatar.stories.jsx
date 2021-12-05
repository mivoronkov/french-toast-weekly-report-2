import React from 'react';
import { AvatarComponent } from '../../modules/common/components/avatar/avatar.component';

export default {
    title: 'Avatar',
    component: AvatarComponent,
};

const Template = (args) => <AvatarComponent {...args} />;
export const AvatarTemplateWithoutImage = Template.bind({});
AvatarTemplateWithoutImage.args = {
    first_name: 'Anatoliy',
    last_name: 'Kolodkin',
    avatar_path: null,
};

export const AvatarTemplateWithImage = Template.bind({});
AvatarTemplateWithImage.args = {
    first_name: 'Alexander',
    last_name: 'Slesarenko',
    avatar_path: 'https://avatars.githubusercontent.com/u/3900938',
};
