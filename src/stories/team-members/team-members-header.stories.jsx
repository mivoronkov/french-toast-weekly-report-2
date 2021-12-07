import React from 'react';
import { TeamMembersHeader } from '../../modules/team-members/team-members-header.component';

export default {
    title: 'Team members',
    component: TeamMembersHeader,
};

const Template = (args) => <TeamMembersHeader {...args} />;
export const TeamMembersHeaderTemplate = Template.bind({});
TeamMembersHeaderTemplate.args = {
    companyName: 'ANKO Technologies Corp',
    joinedDate: 'January 2020',
};
