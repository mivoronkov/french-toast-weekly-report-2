import React from 'react';
import { TeamMembersContent } from '../../modules/team-members/team-members-content.component';

export default {
    title: 'Team members',
    component: TeamMembersContent,
};

const Template = (args) => <TeamMembersContent {...args} />;
export const TeamMembersContentTemplate = Template.bind({});
TeamMembersContentTemplate.args = {
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
