import React from 'react';
import { EditMembersPopupComponent } from './edit-members-popup.component';

export default {
    title: 'Elements/Popups/Edit members or leaders',
    component: EditMembersPopupComponent,
};

const Template = (args) => <EditMembersPopupComponent {...args} />;
export const Variant1 = Template.bind({});
Variant1.args = {
    members: [
        {
            firstName: 'Alexandr',
            lastName: 'Vovchuk',
        },
        {
            firstName: 'Anton',
            lastName: 'Tarkhanov',
        },
        {
            firstName: 'Natalia',
            lastName: 'Starkova',
        },
        {
            firstName: 'Nikolai',
            lastName: 'Kapustin',
        },
        {
            firstName: 'Nina',
            lastName: 'Mammadova',
        },
    ],
    memberType: 'Leader',
};
