import React from 'react';

import {ExpandAllButton} from '../../modules/common/components/buttons/expand-all-button.component';
import {ReportLineItem} from '../my-reports/line-item.stories'
export default {
    title: 'My reports',
    component: ExpandAllButton
}

const Template = (args) => {
    return (
        <ExpandAllButton {...args}>
            <ReportLineItem/>
        </ExpandAllButton>
    );
};
export const ExpandAll = Template.bind({});
ExpandAll.args = {
    data: [
        {duration: 'May 3-May 9, 2020',
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
    ]},
        {duration: 'May 3-May 9, 2020',
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
            ]}
    ]
};