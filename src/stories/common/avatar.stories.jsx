import React from 'react';
import { AvatarComponent } from '../../modules/common/components/avatar/avatar.component';

export default {
    title: 'Elements/Common/Avatar',
    component: AvatarComponent,
};

const Template = (args) => <AvatarComponent {...args} />;
export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    firstName: 'Anatoliy',
    lastName: 'Kolodkin',
};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
    firstName: 'Alexander',
    lastName: 'Slesarenko',
    avatarPath: 'https://avatars.githubusercontent.com/u/3900938',
};

export const DefaultAvatarBig = Template.bind({});
DefaultAvatarBig.args = {
    firstName: 'Anatoliy',
    lastName: 'Kolodkin',
    size: 'big',
};

export const AvatarWithImageBig = Template.bind({});
AvatarWithImageBig.args = {
    firstName: 'Alexander',
    lastName: 'Slesarenko',
    avatarPath: 'https://avatars.githubusercontent.com/u/3900938',
    size: 'big',
};
