import React from 'react';
import PropTypes from 'prop-types';
import { InviteYourTeamContent } from '../../invite-your-team/invite-your-team-content.component';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';
import { Helmet } from 'react-helmet';

export function InviteYourTeam() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Invite your team</title>
            </Helmet>
            <TextHeaderComponent title={'Invite Your Team'} />
            <InviteYourTeamContent />
        </main>
    );
}

InviteYourTeam.propTypes = {};
