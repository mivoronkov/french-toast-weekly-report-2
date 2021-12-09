import React from 'react';

import { SelectingReportCharacteristics } from '../../modules/weekly-report-history/selecting-report-characteristics.component';

export default {
    title: 'Selectors',
    component: SelectingReportCharacteristics,
};

const Template = (args) => <SelectingReportCharacteristics {...args} />;
export const SelectingReportCharacteristicsTemplate = Template.bind({});
SelectingReportCharacteristicsTemplate.args = {
    setStateLink: alert,
};
