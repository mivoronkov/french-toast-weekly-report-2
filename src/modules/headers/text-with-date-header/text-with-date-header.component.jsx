import React from 'react';
import PropTypes from 'prop-types';

export function TextWithDateHeaderComponent({ companyName, joinedDate }) {
    return (
        <header className='bg-dark p-5 text-center text-light'>
            <h1>
                <b>{companyName}</b>
            </h1>
            <p>Joined {formatDate(joinedDate)}</p>
        </header>
    );
}

TextWithDateHeaderComponent.propTypes = {
    companyName: PropTypes.string.isRequired,
    joinedDate: PropTypes.string.isRequired,
};
function formatDate(joinedDate) {
    let dateStringParts = new Intl.DateTimeFormat('en', {
        month: 'long',
        year: 'numeric',
    }).formatToParts(joinedDate);
    return dateStringParts.map((part) => part.value).join(' ');
}
