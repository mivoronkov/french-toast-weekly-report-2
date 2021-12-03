import React from 'react';

import {SectionLabel} from '../../modules/common/components/labels/section-label.component';

export default {
    title: 'Section label with yellow line',
    component: SectionLabel
}

const Template = (args) => <SectionLabel {...args}/>;
export const LabelText = Template.bind({});
LabelText.args = {
    labelText: 'Extended team average'
};