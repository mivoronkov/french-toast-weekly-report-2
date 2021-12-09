import React from 'react';
import { EditMemberInformation } from './edit-member-information.component';

export default {
    title: 'Pages/Edit member information',
    component: EditMemberInformation,
};

const testMembers = [
    {
        id: 0,
        firstName: 'Nikolai',
        lastName: 'Kapustin',
    },
    {
        id: 1,
        firstName: 'Nina',
        lastName: 'Mammadova',
    },
    {
        id: 2,
        firstName: 'Natalia',
        lastName: 'Starkova',
    },
    {
        id: 3,
        firstName: 'Anton',
        lastName: 'Tarkhanov',
    },
    {
        id: 4,
        firstName: 'Alexandr',
        lastName: 'Vovchuk',
    },
    {
        id: 5,
        firstName: 'Aleksandr',
        lastName: 'Evseev',
    },
    {
        id: 6,
        firstName: 'Anna',
        lastName: 'Kotova',
    },
    {
        id: 7,
        firstName: 'Anatoliy',
        lastName: 'Kolodkin',
    },
    {
        id: 8,
        firstName: 'Alexander',
        lastName: 'Slesarenko',
    },
    {
        id: 9,
        firstName: 'Andrey',
        lastName: 'Koshelev',
    },
    {
        id: 10,
        firstName: 'Anton',
        lastName: 'Semenkov',
    },
    {
        id: 11,
        firstName: 'Ilya',
        lastName: 'Krasnoperov',
    },
    {
        id: 12,
        firstName: 'Anton',
        lastName: 'Makarov',
    },
    {
        id: 13,
        firstName: 'Anton',
        lastName: 'Kazakevich',
    },
];

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
        testMembers[0],
        testMembers[1],
        testMembers[2],
        testMembers[3],
        testMembers[4],
    ],
    reportingMembers: [
        testMembers[6],
        testMembers[0],
        testMembers[7],
        testMembers[1],
        testMembers[2],
        testMembers[3],
        testMembers[4],
    ],
    allMembers: testMembers,
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
