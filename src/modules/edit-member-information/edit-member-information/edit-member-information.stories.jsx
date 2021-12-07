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
        'Nikolai Kapustin',
        'Nina Mammadova',
        'Natalia Starkova',
        'Anton Tarkhanov',
        'Alexandr Vovchuk',
    ],
    reportingMembers: [
        'Aleksandr Evseev',
        'Nikolai Kapustin',
        'Anna Kotova',
        'Nina Mammadova',
        'Natalia Starkova',
        'Anton Tarkhanov',
        'Alexandr Vovchuk',
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
    leadersToReport: ['Anatoliy Kolodkin', 'Alexandr Vovchuk'],
};
