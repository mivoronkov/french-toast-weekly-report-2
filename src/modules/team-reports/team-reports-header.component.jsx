import React from 'react';
import PropTypes from 'prop-types';
import { TeamSelector } from '../common/components/topbar/team-selector.component';
import { make_avatar_text } from '../common/components/avatar/avatar.component';

export function TeamReportsHeader({ members }) {
    return (
        <header className='d-flex flex-column justify-content-between align-items-center text-light p-4 bg-dark'>
            <TeamSelector />
            <div className='row gx-0'>
                {members.length > 0 ? (
                    <div className='col z-4'>
                        <div className='user-avatar-circle user-avatar-circle-1 justify-content-center align-items-center'>
                            <h5 className='text-dark m-0'>
                                {make_avatar_text(
                                    members[0].firstName,
                                    members[0].lastName
                                )}
                            </h5>
                        </div>
                    </div>
                ) : (
                    ''
                )}

                {members.length > 1 ? (
                    <div className='col z-3'>
                        <div className='user-avatar-circle user-avatar-circle-2 justify-content-center align-items-center'>
                            <h5 className='text-dark m-0'>NK</h5>
                        </div>
                    </div>
                ) : (
                    ''
                )}

                {members.length > 2 ? (
                    <div className='col z-2'>
                        <div className='user-avatar-circle user-avatar-circle-3 justify-content-center align-items-center'>
                            <h5 className='text-dark m-0'>AK</h5>
                        </div>
                    </div>
                ) : (
                    ''
                )}

                {members.length > 3 ? (
                    <div className='col z-1'>
                        <div className='user-avatar-circle user-avatar-circle-4 justify-content-center align-items-center'>
                            <h5 className='text-dark m-0'>NM</h5>
                        </div>
                    </div>
                ) : (
                    ''
                )}

                {members.length > 4 ? (
                    <div className='col z-10'>
                        <div className='user-avatar-circle number-circle justify-content-center align-items-center'>
                            <h5 className='text-dark m-0'>
                                +{members.length - 4}
                            </h5>
                        </div>
                    </div>
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
