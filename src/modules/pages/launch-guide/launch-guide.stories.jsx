import React from 'react';
import { LaunchGuide } from './launch-guide.component';

export default {
    title: 'Pages/Launch guide',
    component: LaunchGuide,
};

const Template = (args) => <LaunchGuide {...args} />;
export const LaunchGuideTemplate = Template.bind({});
