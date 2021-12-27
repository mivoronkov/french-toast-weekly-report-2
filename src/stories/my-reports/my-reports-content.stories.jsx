import React from 'react';

import { MyReportsContent } from '../../modules/my-reports/my-reports-content.component';

export default {
    title: 'My reports',
    component: MyReportsContent,
};

const Template = (args) => <MyReportsContent {...args} />;
export const MyReportsContentTemplate = Template.bind({});
MyReportsContentTemplate.args = {
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
