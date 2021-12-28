import React from 'react';
import PropTypes from 'prop-types';
import { AvatarComponent } from '../common/components/avatar/avatar.component';

export function TeamMembersLineItem({ firstName, lastName, avatarPath, id }) {
    return (
        <li className='list-group-item mb-2 border-0 shadow d-flex justify-content-between'>
            <div className='d-flex'>
                <AvatarComponent
                    lastName={lastName}
                    firstName={firstName}
                    avatarPath={avatarPath}
                />
                <div className='col ms-3 m-auto'>
                    <div className='user-name align-items-center'>
                        {firstName} {lastName}
                    </div>
                </div>
            </div>
            <div className='col-1 d-flex align-items-left m-left p-0'>
                <span className='m-auto'>
                    <a
                        className='text-decoration-none text-dark'
                        href={`/edit-member-information?id=${id}`}>
                        Edit
                    </a>
                </span>
            </div>
        </li>
    );
}

TeamMembersLineItem.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatarPath: PropTypes.string,
    id: PropTypes.number,
};
