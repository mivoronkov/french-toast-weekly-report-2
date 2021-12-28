import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AvatarComponent } from '../../common/components/avatar/avatar.component';
import { useStore } from 'effector-react';
import { userInDBStore } from '../../store/user-in-d-b-store';
import { getClosesReport, reportsStore } from '../../store/weekly-report-store';
import { useAuth0 } from '@auth0/auth0-react';

export function ProfileHeaderComponent({
    first_name,
    last_name,
    email,
    avatar_path,
}) {
    const userInDB = useStore(userInDBStore);
    return (
        <header className='d-flex flex-column bg-dark p-5 text-center text-light'>
            <div className='mx-auto'>
                <AvatarComponent
                    lastName={last_name}
                    firstName={first_name}
                    avatarPath={avatar_path}
                    size='big'
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
