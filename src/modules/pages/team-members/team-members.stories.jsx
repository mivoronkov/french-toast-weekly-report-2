import React from 'react';
import { TeamMembers } from './team-members.component';

export default {
    title: 'Pages/Team members',
    component: TeamMembers,
};

const Template = (args) => <TeamMembers {...args} />;
export const TeamMembersTemplate = Template.bind({});
TeamMembersTemplate.args = {
    companyName: 'ANKO Technologies Corp',
    joinedDate: 'January 2020',
    members: [
        {
            firstName: 'Aleksandr',
            lastName: 'Evseev',
        },
        {
            firstName: 'Nikolai',
            lastName: 'Kapustin',
        },
        {
            firstName: 'Anna',
            lastName: 'Kotova',
        },
        {
            firstName: 'Nina',
            lastName: 'Mammadova',
        },
        {
            firstName: 'Natalia',
            lastName: 'Starkova',
        },
        {
            firstName: 'Anton',
            lastName: 'Tarkhanov',
        },
        {
            firstName: 'Aleksandr',
            lastName: 'Vovchuk',
        },
    ],
};
