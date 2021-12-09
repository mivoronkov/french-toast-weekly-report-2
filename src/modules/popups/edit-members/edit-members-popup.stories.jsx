import React from 'react';
import { EditMembersPopupComponent } from './edit-members-popup.component';

export default {
    title: 'Elements/Popups/Edit members or leaders',
    component: EditMembersPopupComponent,
};

const Template = (args) => <EditMembersPopupComponent {...args} />;
export const Variant1 = Template.bind({});
Variant1.args = {
    membersToEdit: [
        {
            id: 1,
            firstName: 'Alexandr',
            lastName: 'Vovchuk',
        },
        {
            id: 2,
            firstName: 'Anton',
            lastName: 'Tarkhanov',
        },
        {
            id: 3,
            firstName: 'Natalia',
            lastName: 'Starkova',
        },
        {
            id: 4,
            firstName: 'Nikolai',
            lastName: 'Kapustin',
        },
        {
            id: 5,
            firstName: 'Nina',
            lastName: 'Mammadova',
        },
    ],
    availableMembers: [
        {
            id: 543,
            firstName: 'Alexander',
            lastName: 'Slesarenko',
        },
    ],
    memberType: 'Leader',
};
