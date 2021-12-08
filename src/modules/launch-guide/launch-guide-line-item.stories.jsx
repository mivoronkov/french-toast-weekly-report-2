import React from 'react';
import { LaunchGuideLineItem } from './launch-guide-line-item.component';
import launch_guide_encourage from '../../img/launch_guide_encourage.png';
import launch_guide_invite from '../../img/launch_guide_invite.png';

export default {
    title: 'Launch Guide',
    component: LaunchGuideLineItem,
};

const Template = (args) => <LaunchGuideLineItem {...args} />;
export const LaunchGuideLineItemWithoutButton = Template.bind({});
LaunchGuideLineItemWithoutButton.args = {
    headerText: 'Encourage Your Team to Accept Your Invitation',
    infoText:
        'When they receive your invitation, team members will be ' +
        'prompted to complete their profiles. If a team member ' +
        "hasn't created their profile within 24 hours, " +
        'follow up with them!',

    imageIsFirst: true,
    image: launch_guide_encourage,
    imageAlt: 'encourage',
};

const Template2 = (args) => (
    <LaunchGuideLineItem {...args}>
        <a>
            <button className='btn btn-warning mt-3'>Invite Your Team</button>
        </a>
    </LaunchGuideLineItem>
);
export const LaunchGuideLineItemWithButton = Template2.bind({});
LaunchGuideLineItemWithButton.args = {
    headerText: 'Invite Your Team',
    infoText:
        'Click on the link below and invite the team members who ' +
        'directly report to you.',
    imageIsFirst: false,
    image: launch_guide_invite,
    imageAlt: 'invite',
};
