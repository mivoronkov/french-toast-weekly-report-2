import React from 'react';
import { TextHeaderComponent } from './text-header.component';

export default {
    title: 'Elements/Headers/Text header',
    component: TextHeaderComponent,
};

const Template = (args) => <TextHeaderComponent {...args} />;
export const TextHeaderComponentTemplate = Template.bind({});
TextHeaderComponentTemplate.args = {
    title: 'Invite Your Team',
};
