import React from 'react';

import  ReportEmotionalCard  from '../../modules/weekly-report-history/report-card.component';

export default {
    title: 'Report emotional card',
    component: ReportEmotionalCard
}

const Template = (args) => <ReportEmotionalCard {...args}/>;
export const NamedCard = Template.bind({});
NamedCard.args = {
    memberName: 'Aleksey Petrov'
};