import React from 'react';
import PropTypes from 'prop-types';

export function TextWithDateHeaderComponent({ companyName, joinedDate }) {
    return (
        <header className='bg-dark p-5 text-center text-light'>
            <h1>
                <b>{companyName}</b>
            </h1>
            <p>Joined {joinedDate}</p>
        </header>
    );
}

TextWithDateHeaderComponent.propTypes = {
    companyName: PropTypes.string.isRequired,
    joinedDate: PropTypes.string.isRequired,
};
