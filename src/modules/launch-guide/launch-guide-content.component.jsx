import React from 'react';

import launch_guide_invite from '../../img/launch_guide_invite.png';
import launch_guide_encourage from '../../img/launch_guide_encourage.png';
import launch_guide_remind from '../../img/launch_guide_remind.png';
import launch_guide_read from '../../img/launch_guide_read.png';
import { LaunchGuideLineItem } from './launch-guide-line-item.component';

export function LaunchGuideContent() {
    return (
        <div className='p-sm-5 container'>
            <LaunchGuideLineItem
                headerText={'Invite Your Team'}
                infoText={
                    'Click on the link below and invite the team members who ' +
                    'directly report to you.'
                }
                imageIsFirst={false}
                image={launch_guide_invite}
                imageAlt={'invite'}>
                <a href='/invite-your-team'>
                    <button className='btn btn-warning mt-3'>
                        Invite Your Team
                    </button>
                </a>
            </LaunchGuideLineItem>
            <LaunchGuideLineItem
                headerText={'Encourage Your Team to Accept Your Invitation'}
                infoText={
                    'When they receive your invitation, team members will be ' +
                    'prompted to complete their profiles. If a team member ' +
                    "hasn't created their profile within 24 hours, " +
                    'follow up with them!'
                }
                imageIsFirst={true}
                image={launch_guide_encourage}
                imageAlt={'encourage'}
            />
            <LaunchGuideLineItem
                headerText={'Remind Your Team'}
                infoText={`Every Friday, we'll automatically send your team members an email
                reminding them to fill out their Weekly Report. But we also encourage you
                to constantly request their Weekly Reports so they realize the
                importance of this new habit.`}
                imageIsFirst={false}
                image={launch_guide_remind}
                imageAlt={'remind'}
            />
            <LaunchGuideLineItem
                headerText={'Read Their Reports'}
                infoText={`Set aside some time on Monday to read all the reports.
                Then reach out to any team members who need to be
                acknowledged for a success or supported during a
                difficult time. (And yes, we\'ll send you a reminder
                to read your reports each week too.)`}
                imageIsFirst={true}
                image={launch_guide_read}
                imageAlt={'read'}
            />
        </div>
    );
}
