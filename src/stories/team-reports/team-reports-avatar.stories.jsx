import React from 'react';

import { TeamReportsAvatar } from '../../modules/team-reports/team-reports-avatar.component';
import PropTypes from 'prop-types';

export default {
    title: 'Team reports',
    component: TeamReportsAvatar,
};

const Template = (args) => <TeamReportsAvatar {...args} />;
export const TeamReportsUserAvatarTemplate = Template.bind({});
TeamReportsUserAvatarTemplate.args = {
    firstName: 'Aleksandr',
    lastName: 'Evseev',
    colExtraClasses: 'z-4',
};
