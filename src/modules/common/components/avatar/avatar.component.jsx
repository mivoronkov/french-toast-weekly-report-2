import React from 'react';
import PropTypes from 'prop-types';

function make_avatar_text(first_name, last_name) {
    return (first_name[0] + last_name[0]).toUpperCase();
}

export function AvatarComponent({ first_name, last_name, avatar_path }) {
    return avatar_path ? (
        <img
            className='avatar-border center-block'
            src={avatar_path}
            alt={`Avatar of ${first_name} ${last_name}`}
        />
    ) : (
        <div className='avatar-border'>
            <span className='fw-bold user-select-none'>
                {make_avatar_text(first_name, last_name)}
            </span>
        </div>
    );
}

AvatarComponent.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar_path: PropTypes.string,
};
