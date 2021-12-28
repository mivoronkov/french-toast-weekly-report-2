import React from 'react';
import PropTypes from 'prop-types';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { TeamMembersLineItem } from './team-members-line-item.component';

export function TeamMembersContent({ members }) {
    let membersList = members.map((member, index) => (
        <TeamMembersLineItem
            firstName={member.firstName}
            lastName={member.lastName}
            avatarPath={member.avatarPath}
            key={index}
            id={member.id}
        />
    ));
    return (
        <div className='row p-5 d-flex text-left'>
            <div className='col-10 mx-auto text-center'>
                <SectionLabel labelText={'TEAM MEMBERS'} />
                <ul className='p-4'>{membersList}</ul>
            </div>
        </div>
    );
}

TeamMembersContent.propTypes = {
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            avatarPath: PropTypes.string,
        })
    ),
};
