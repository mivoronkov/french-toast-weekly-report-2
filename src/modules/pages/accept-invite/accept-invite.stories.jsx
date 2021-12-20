import React from 'react';
import { AcceptInviteComponent } from './accept-invite.component';

export default {
    title: 'Pages/Accept invite',
    component: AcceptInviteComponent,
};

const Template = (args) => <AcceptInviteComponent {...args} />;
export const Page = Template.bind({});
Page.args = {
    inviterName: 'Anatoliy Kolodkin',
    company: 'ANKO Codemaker Academy',
};
