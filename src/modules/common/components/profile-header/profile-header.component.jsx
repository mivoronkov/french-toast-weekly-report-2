import React from 'react';
import PropTypes from 'prop-types';
import { AvatarComponent } from '../avatar/avatar.component';

export function ProfileHeaderComponent({
    first_name,
    last_name,
    email,
    avatar_path,
}) {
    return (
        <header className='d-flex flex-column bg-dark p-5 text-center text-light'>
            <div className='mx-auto'>
                <AvatarComponent
                    lastName={last_name}
                    firstName={first_name}
                    avatarPath={avatar_path}
                />
            </div>
            <h1 className='big-title fw-bold'>{`${first_name} ${last_name}`}</h1>
            <p>{email}</p>
        </header>
    );
}

ProfileHeaderComponent.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar_path: PropTypes.string,
};
