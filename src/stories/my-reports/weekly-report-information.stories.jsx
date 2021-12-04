import React from 'react';

import {WeeklyReportInformation} from '../../modules/my-reports/weekly-report-information.component';

export default {
    title: 'My reports',
    component: WeeklyReportInformation
}

const Template = (args) => <WeeklyReportInformation {...args}/>;
export const ReportInformation = Template.bind({});
ReportInformation.args = {
    stateName: 'morale',
    stateLevel: 1,
    comments: 'Trrrrrropol'
};