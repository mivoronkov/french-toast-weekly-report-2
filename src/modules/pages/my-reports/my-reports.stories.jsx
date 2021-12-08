import React from 'react';
import { MyReports } from './my-reports.component';

export default {
    title: 'Pages/My reports',
    component: MyReports,
};

const Template = (args) => <MyReports {...args} />;
export const MyReportsPage = Template.bind({});
MyReportsPage.args = {
    first_name: 'Anatoliy',
    last_name: 'Kolodkin',
    email: 'anatoliy@ankosoftware.com',
    avatar_path: null,
    data: [
        {
            duration: 'May 3-May 9, 2020',
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
            duration: 'May 3-May 9, 2020',
            weeklyInformation: [
                {
                    stateName: 'morale',
                    stateLevel: 2,
                    comments: 'Zero tolerance',
                },
                {
                    stateName: 'stress',
                    stateLevel: 3,
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
    ],
};
