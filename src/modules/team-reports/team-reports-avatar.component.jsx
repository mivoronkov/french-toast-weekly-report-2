import React from 'react';
import PropTypes from 'prop-types';
import { make_avatar_text } from '../common/components/avatar/avatar.component';

export function TeamReportsAvatar({
    firstName,
    lastName,
    colExtraClasses,
    divExtraClasses,
}) {
    return (
        <div className={`col${colExtraClasses ? ' ' + colExtraClasses : ''}`}>
            <div
                className={`user-avatar-circle justify-content-center align-items-center${
                    divExtraClasses ? ' ' + divExtraClasses : ''
                }`}>
                <h5 className='text-dark m-0'>
                    {make_avatar_text(firstName, lastName)}
                </h5>
            </div>
        </div>
    );
}

TeamReportsAvatar.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    colExtraClasses: PropTypes.string,
    divExtraClasses: PropTypes.string,
};
