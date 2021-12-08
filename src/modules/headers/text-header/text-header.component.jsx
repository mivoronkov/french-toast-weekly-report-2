import React from 'react';
import PropTypes from 'prop-types';

export function TextHeaderComponent({ title }) {
    return (
        <header className='bg-dark p-5 text-center text-light'>
            <h1>{title}</h1>
        </header>
    );
}

TextHeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
};
