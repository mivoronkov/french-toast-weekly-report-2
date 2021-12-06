import React from 'react';

import PropTypes from 'prop-types';
import { TeamReportsNumberAvatar } from '../../modules/team-reports/team-reports-number-avatar.component';

export default {
    title: 'Team reports',
    component: TeamReportsNumberAvatar,
};

const Template = (args) => <TeamReportsNumberAvatar {...args} />;
export const TeamReportsNumberAvatarTemplate = Template.bind({});
TeamReportsNumberAvatarTemplate.args = {
    number: 3,
};
