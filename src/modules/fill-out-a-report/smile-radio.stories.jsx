import React from 'react';

import { RadioSmile } from './smile-radio.component';

export default {
    title: 'Fill out a report',
    component: RadioSmile,
};

const Template = (arg) => <RadioSmile {...arg} />;
export const RadioSmileLabled = Template.bind({});
RadioSmileLabled.args = {
    valueText: 'Very Low',
    valueLevel: 2,
};
