import React from 'react';
import { TagRowComponent } from './tag-row.component';

export default {
    title: 'Elements/Edit member/Tag row',
    component: TagRowComponent,
};

const Template = (args) => <TagRowComponent {...args} />;
export const TagRowTemplate = Template.bind({});
TagRowTemplate.args = {
    tag_names: [
        'Nikolai Kapustin',
        'Nina Mammadova',
        'Natalia Starkova',
        'Anton Tarkhanov',
        'Alexandr Vovchuk',
    ],
};
