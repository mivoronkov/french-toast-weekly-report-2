import React from 'react';
import PropTypes from 'prop-types';

function makeAvatarText(firstName, lastName) {
    return (firstName[0] + lastName[0]).toUpperCase();
}

export var AvatarComponent = function ({
    firstName,
    lastName,
    avatarPath = '',
}) {
    return avatarPath ? (
        <img
            className='avatar-border center-block'
            src={avatarPath}
            alt={`Avatar of ${firstName} ${lastName}`}
        />
    ) : (
        <div className='avatar-border'>
            <span className='fw-bold user-select-none'>
                {makeAvatarText(firstName, lastName)}
            </span>
        </div>
    );
};

AvatarComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatarPath: PropTypes.string,
};
