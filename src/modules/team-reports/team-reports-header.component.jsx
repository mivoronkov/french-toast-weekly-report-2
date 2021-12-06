import React from 'react';
import PropTypes from 'prop-types';
import { TeamSelector } from '../common/components/topbar/team-selector.component';
import { TeamReportsAvatar } from './team-reports-avatar.component';
import { TeamReportsNumberAvatar } from './team-reports-number-avatar.component';

export function TeamReportsHeader({ members }) {
    return (
        <header className='d-flex flex-column justify-content-between align-items-center text-light p-4 bg-dark'>
            <TeamSelector />
            <div className='row gx-0'>
                {members.length > 0 ? (
                    <TeamReportsAvatar
                        lastName={members[0].lastName}
                        firstName={members[0].firstName}
                        colExtraClasses={'z-4'}
                        divExtraClasses={'user-avatar-circle-1'}
                    />
                ) : (
                    ''
                )}

                {members.length > 1 ? (
                    <TeamReportsAvatar
                        lastName={members[1].lastName}
                        firstName={members[1].firstName}
                        colExtraClasses={'z-3'}
                        divExtraClasses={'user-avatar-circle-2'}
                    />
                ) : (
                    ''
                )}

                {members.length > 2 ? (
                    <TeamReportsAvatar
                        lastName={members[2].lastName}
                        firstName={members[2].firstName}
                        colExtraClasses={'z-2'}
                        divExtraClasses={'user-avatar-circle-3'}
                    />
                ) : (
                    ''
                )}

                {members.length > 3 ? (
                    <TeamReportsAvatar
                        lastName={members[3].lastName}
                        firstName={members[3].firstName}
                        colExtraClasses={'z-1'}
                        divExtraClasses={'user-avatar-circle-4'}
                    />
                ) : (
                    ''
                )}

                {members.length > 4 ? (
                    <TeamReportsNumberAvatar
                        number={members.length - 4}
                        colExtraClasses={'z-10'}
                    />
                ) : (
                    ''
                )}
            </div>
            <h2 className='mt-4'>
                Your team <strong>has not submitted reports</strong> this week.
            </h2>
        </header>
    );
}

TeamReportsHeader.propTypes = {
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
        })
    ),
};
