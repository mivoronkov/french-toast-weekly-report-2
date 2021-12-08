import React from 'react';
import logo from '../../../img/logo.png';
import { LogoHeaderComponent } from './logo-header.component';

export default {
    title: 'Elements/Headers/Logo header',
    component: LogoHeaderComponent,
};

const Template = (args) => <LogoHeaderComponent {...args} />;
export const LogoHeaderComponentTemplate = Template.bind({});
LogoHeaderComponentTemplate.args = {
    logo: logo,
    title: 'Launch Guide',
};
