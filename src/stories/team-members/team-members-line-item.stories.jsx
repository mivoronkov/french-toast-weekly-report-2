import React from 'react';
import { TeamMembersLineItem } from '../../modules/team-members/team-members-line-item.component';

export default {
    title: 'Team members',
    component: TeamMembersLineItem,
};

const Template = (args) => <TeamMembersLineItem {...args} />;
export const TeamMembersLineItemWithoutAvatar = Template.bind({});
TeamMembersLineItemWithoutAvatar.args = {
    firstName: 'Aleksandr',
    lastName: 'Evseev',
};

export const TeamMembersLineItemWithAvatar = Template.bind({});
TeamMembersLineItemWithAvatar.args = {
    firstName: 'Alexander',
    lastName: 'Slesarenko',
    avatarPath: 'https://avatars.githubusercontent.com/u/3900938',
};
