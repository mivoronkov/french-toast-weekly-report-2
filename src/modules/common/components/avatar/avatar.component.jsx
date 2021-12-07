import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './avatar.styles.scss';

export function makeAvatarText(firstName, lastName) {
    return (firstName[0] + lastName[0]).toUpperCase();
}

export var AvatarComponent = function ({
    firstName,
    lastName,
    avatarPath = '',
    size = 'default',
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
    const avatarSizeCss =
        size === 'big' ? 'avatar-size-big' : 'avatar-size-default';
    const avatarCss = `avatar-border ${avatarSizeCss}`;
    return currentSrc ? (
        <img
            className={`${avatarCss} center-block`}
            src={avatarPath}
            alt={`Avatar of ${firstName} ${lastName}`}
        />
    ) : (
        <div
            className={`d-flex flex-column justify-content-center align-content-center avatar-bg-gray ${avatarCss}`}>
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
    size: PropTypes.string,
};
