import React from 'react';
import { TeamReports } from './team-reports.component';

export default {
    title: 'Pages/Team reports',
    component: TeamReports,
};

const Template = (args) => <TeamReports {...args} />;
export const Variant1 = Template.bind({});
Variant1.args = {
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

export const Variant2 = Template.bind({});
Variant2.args = {
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
            weeklyInformation: [
                {
                    stateName: 'morale',
                    stateLevel: 2,
                    comments: 'Zero tolerance',
                },
                {
                    stateName: 'stress',
                    stateLevel: 4,
                    comments: 'its ok',
                },
                {
                    stateName: 'workload',
                    stateLevel: 1,
                    comments: 'burn burn burn',
                },
            ],
            weeklyNotations: [
                {
                    title: 'Weekly High',
                    text: 'Identified our goal and priorities',
                },
                {
                    title: 'Weekly Low',
                    text: 'Cold weather',
                },
                {
                    title: 'Anything Else',
                    text: 'Look up',
                },
            ],
        },
        {
            firstName: 'Anna',
            lastName: 'Kotova',
        },
        {
            firstName: 'Nina',
            lastName: 'Mammadova',
            weeklyInformation: [
                {
                    stateName: 'morale',
                    stateLevel: 1,
                    comments: 'Very bad',
                },
                {
                    stateName: 'stress',
                    stateLevel: 3,
                    comments: 'Pretty ok',
                },
                {
                    stateName: 'workload',
                    stateLevel: 5,
                    comments: 'The best',
                },
            ],
            weeklyNotations: [
                {
                    title: 'Weekly High',
                    text: 'Lalala',
                },
                {
                    title: 'Weekly Low',
                    text: 'Lululu',
                },
                {
                    title: 'Anything Else',
                    text: 'Lelele',
                },
            ],
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
