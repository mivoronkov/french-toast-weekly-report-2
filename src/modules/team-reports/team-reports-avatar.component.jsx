import React from 'react';
import PropTypes from 'prop-types';
import { makeAvatarText } from '../common/components/avatar/avatar.component';

export function TeamReportsAvatar({ firstName, lastName, colStyle }) {
    return (
        <div className='col' style={colStyle}>
            <div className='user-avatar-circle justify-content-center align-items-center'>
                <h5 className='text-dark m-0'>
                    {makeAvatarText(firstName, lastName)}
                </h5>
            </div>
        </div>
    );
}

TeamReportsAvatar.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    colStyle: PropTypes.any,
};
