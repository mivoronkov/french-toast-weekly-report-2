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
    reportInfo: 'Some report info',
};
