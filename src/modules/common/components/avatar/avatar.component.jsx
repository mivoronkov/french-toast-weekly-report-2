import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function makeAvatarText(firstName, lastName) {
    return (firstName[0] + lastName[0]).toUpperCase();
}

export var AvatarComponent = function ({
    firstName,
    lastName,
    avatarPath = '',
}) {
    const [currentSrc, setCurrentSrc] = useState(null);
    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setCurrentSrc(avatarPath);
        };
        image.onerror = () => {
            setCurrentSrc(null);
        };
        image.src = avatarPath;
    });
    return currentSrc ? (
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
