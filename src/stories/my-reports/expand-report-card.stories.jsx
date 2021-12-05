import React from 'react';

import {ExpandReportCard} from '../../modules/my-reports/expand-report-card.component';

export default {
    title: 'My reports',
    component: ExpandReportCard
}

const Template = (args) => <ExpandReportCard  {...args}/>;
export const ExpandCard = Template.bind({});
ExpandCard.args = {
    duration: 'May 3-May 9, 2020',
    weeklyInformation: [
        {
            stateName: 'morale',
            stateLevel: 2,
            comments: 'Zero tolerance'
        },
        {
            stateName: 'stress',
            stateLevel: 4,
            comments: 'its ok'
        },
        {
            stateName: 'workload',
            stateLevel: 1,
            comments: 'burn burn burn'
        },
    ],
    weeklyNotations: [
        {
            title: 'Weekly High',
            text: 'Identified our goal and priorities'
        },
        {
            title: 'Weekly Low',
            text: 'Cold weather'
        },
        {
            title: 'Anything Else',
            text: 'Look up'
        },
    ]
};