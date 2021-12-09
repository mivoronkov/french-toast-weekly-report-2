import React from 'react';
import { EditMemberInformation } from './edit-member-information.component';

export default {
    title: 'Pages/Edit member information',
    component: EditMemberInformation,
};

const Template = (args) => <EditMemberInformation {...args} />;
export const Variant1 = Template.bind({});
Variant1.args = {
    firstName: 'Anatoliy',
    lastName: 'Kolodkin',
    title: 'CEO',
    email: 'anatoliy@ankosoftware.com',
    inviteLink:
        'https://weeklyreport.entreleadership.com/accept/eyJsaWQiOiDFjaeFHjewlskdJFosdgSfjsdkHFJLGewjmds',
    leadersToReport: [
        {
            id: 1,
            firstName: 'Nikolai',
            lastName: 'Kapustin',
        },
        {
            id: 2,
            firstName: 'Nina',
            lastName: 'Mammadova',
        },
        {
            id: 3,
            firstName: 'Natalia',
            lastName: 'Starkova',
        },
        {
            id: 4,
            firstName: 'Anton',
            lastName: 'Tarkhanov',
        },
        {
            id: 5,
            firstName: 'Alexandr',
            lastName: 'Vovchuk',
        },
    ],
    reportingMembers: [
        {
            id: 6,
            firstName: 'Aleksandr',
            lastName: 'Evseev',
        },
        {
            id: 1,
            firstName: 'Nikolai',
            lastName: 'Kapustin',
        },
        {
            id: 8,
            firstName: 'Anna',
            lastName: 'Kotova',
        },
        {
            id: 2,
            firstName: 'Nina',
            lastName: 'Mammadova',
        },
        {
            id: 3,
            firstName: 'Natalia',
            lastName: 'Starkova',
        },
        {
            id: 4,
            firstName: 'Anton',
            lastName: 'Tarkhanov',
        },
        {
            id: 5,
            firstName: 'Alexandr',
            lastName: 'Vovchuk',
        },
    ],
};

export const Variant2 = Template.bind({});
Variant2.args = {
    firstName: 'Alexander',
    lastName: 'Slesarenko',
    title: 'Intern',
    email: 'dragongling@gmail.com',
    inviteLink: 'https://github.com/dragongling',
    avatar: 'https://avatars.githubusercontent.com/u/3900938',
    leadersToReport: [
        {
            id: 1,
            firstName: 'Anatoliy',
            lastName: 'Kolodkin',
        },
        {
            id: 2,
            firstName: 'Alexandr',
            lastName: 'Vovchuk',
        },
    ],
};
