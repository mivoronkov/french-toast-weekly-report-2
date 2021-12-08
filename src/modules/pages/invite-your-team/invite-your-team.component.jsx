import React from 'react';
import PropTypes from 'prop-types';
import { InviteYourTeamContent } from '../../invite-your-team/invite-your-team-content.component';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';

export function InviteYourTeam() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <TextHeaderComponent title={'Invite Your Team'} />
            <InviteYourTeamContent />
        </main>
    );
}

InviteYourTeam.propTypes = {};
