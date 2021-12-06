import React from 'react';

import { TeamReports } from '../../modules/team-reports/team-reports.component';

export default {
    title: 'Team reports',
    component: TeamReports,
};

const Template = (args) => <TeamReports {...args} />;
export const TeamReportsTemplate = Template.bind({});
TeamReportsTemplate.args = {
    previousPeriod: '5/16-5/22',
    currentPeriod: '5/23-5/29',
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
