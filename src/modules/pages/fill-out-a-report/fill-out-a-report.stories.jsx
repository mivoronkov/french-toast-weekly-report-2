import React from 'react';
import { FillOutAReport } from './fill-out-a-report.component';

export default {
    title: 'Pages/Fill out a report',
    component: FillOutAReport,
};

const Template = (args) => <FillOutAReport {...args} />;
export const FillOutAReportTemplate = Template.bind({});
FillOutAReportTemplate.args = {
    firstName: 'Anatoliy',
};
