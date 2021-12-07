import React from 'react';

import { TeamReportsLineItem } from '../../modules/team-reports/team-reports-line-item.component';

export default {
    title: 'Team reports',
    component: TeamReportsLineItem,
};

const Template = (args) => <TeamReportsLineItem {...args} />;
export const TeamReportsLineItemWithoutReportInfo = Template.bind({});
TeamReportsLineItemWithoutReportInfo.args = {
    firstName: 'Aleksandr',
    lastName: 'Evseev',
};

export const TeamReportsLineItemWithReportInfo = Template.bind({});
TeamReportsLineItemWithReportInfo.args = {
    firstName: 'Aleksandr',
    lastName: 'Evseev',
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
};
