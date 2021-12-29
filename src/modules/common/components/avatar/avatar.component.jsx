import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './avatar.styles.scss';
import { getImageSrcIfValid } from '../../../../utils';

export function makeAvatarText(firstName, lastName) {
    if (firstName && firstName.length > 0) {
        return (firstName[0] + lastName[0]).toUpperCase();
    } else if (lastName && lastName.length > 0) {
        return lastName.substring(0, 2).toUpperCase();
    } else {
        return '';
    }
}

export const AvatarComponent = function ({
    firstName,
    lastName,
    avatarPath = '',
    size = 'default',
}) {
    const [currentSrc, setCurrentSrc] = useState(null);
    useEffect(() => {
        getImageSrcIfValid(avatarPath)
            .then(() => setCurrentSrc(avatarPath))
            .catch(() => setCurrentSrc(null));
    }, [avatarPath]);
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
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    avatarPath: PropTypes.string,
    size: PropTypes.string,
};
