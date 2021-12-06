import React from 'react';
import { AvatarComponent } from '../../modules/common/components/avatar/avatar.component';

export default {
    title: 'Elements/Common/Avatar',
    component: AvatarComponent,
};

const Template = (args) => <AvatarComponent {...args} />;
export const AvatarTemplateWithoutImage = Template.bind({});
AvatarTemplateWithoutImage.args = {
    firstName: 'Anatoliy',
    lastName: 'Kolodkin',
    avatar_path: null,
};

export const AvatarTemplateWithImage = Template.bind({});
AvatarTemplateWithImage.args = {
    firstName: 'Alexander',
    lastName: 'Slesarenko',
    avatarPath: 'https://avatars.githubusercontent.com/u/3900938',
};
