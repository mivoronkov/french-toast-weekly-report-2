import React from 'react';

import { TextAreaCounter } from './text-area-counter.component';

export default {
    title: 'Fill out a report',
    component: TextAreaCounter,
};

const Template = (arg) => <TextAreaCounter {...arg} />;
export const labeledTextAreaCounter = Template.bind({});
labeledTextAreaCounter.args = {
    maxLength: 600,
    idText: 'whats-high-textarea',
    labelText: 'What was your high this week?',
    placeholderText:
        "What was your personal or professional high this week? What's the one thing you accomplished at work this week?",
};
