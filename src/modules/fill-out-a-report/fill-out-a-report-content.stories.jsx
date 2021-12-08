import React from 'react';
import { FillOutAReportContent } from './fill-out-a-report-content.component';

export default {
    title: 'Fill out a report',
    component: FillOutAReportContent,
};

const Template = (args) => <FillOutAReportContent {...args} />;
export const FillOutAReportContentTemplate = Template.bind({});
FillOutAReportContentTemplate.args = {
    firstName: 'Anatoliy',
};
