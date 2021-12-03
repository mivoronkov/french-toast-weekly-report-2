import React from 'react';

import {HeaderComponent} from "../../modules/common/components/header/header.component";

export default {
    title: 'Header',
    component: HeaderComponent
}

const Template = (args) => <HeaderComponent {...args} />;
export const HeaderLaunchGuideTemplate = Template.bind({});
HeaderLaunchGuideTemplate.args = {
    title: 'Launch Guide'
}
