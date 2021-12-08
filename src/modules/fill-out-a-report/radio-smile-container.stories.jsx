import React from 'react';

import { RadioSmileContainer } from './radio-smile-container.component';

export default {
    title: 'Fill out a report',
    component: RadioSmileContainer,
};

const Template = (arg) => <RadioSmileContainer {...arg} />;
export const RadioSmileInputContainer = Template.bind({});
RadioSmileInputContainer.args = {
    mainLabel: 'How was your morale this week?',
    containerInputName: 'input1',
    containerLabels: ['text1', 'text2', 'text3', 'text4', 'text5'],
};
