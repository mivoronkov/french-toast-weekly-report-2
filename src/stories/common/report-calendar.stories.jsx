import React from 'react';

import  ReportCalendar  from '../../modules/common/components/topbar/report-calendar.component';

export default {
    title: 'Selectors',
    component: ReportCalendar
}

const Template = (args) => <ReportCalendar {...args}/>;
export const LabelText = Template.bind({});
LabelText.args = {
    previousPeriod: '5/16-5/22',
    currentPeriod: '5/23-5/29'
};