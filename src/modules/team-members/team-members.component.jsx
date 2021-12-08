import React from 'react';
import PropTypes from 'prop-types';
import { TextWithDateHeaderComponent } from '../headers/text-with-date-header/text-with-date-header.component';
import { TeamMembersContent } from './team-members-content.component';

export function TeamMembers({ companyName, joinedDate, members }) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <TextWithDateHeaderComponent
                companyName={companyName}
                joinedDate={joinedDate}
            />
            <TeamMembersContent members={members} />
        </main>
    );
}

TeamMembers.propTypes = {
    companyName: PropTypes.string.isRequired,
    joinedDate: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            avatarPath: PropTypes.string,
        })
    ),
};
