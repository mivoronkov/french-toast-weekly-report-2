import React from 'react';

import { TeamReportsHeader } from '../../modules/team-reports/team-reports-header.component';

export default {
    title: 'Team reports',
    component: TeamReportsHeader,
};

const Template = (args) => <TeamReportsHeader {...args} />;
export const TeamReportsHeaderTemplate = Template.bind({});
TeamReportsHeaderTemplate.args = {
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
