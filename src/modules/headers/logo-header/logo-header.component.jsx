import React from 'react';
import PropTypes from 'prop-types';

export function LogoHeaderComponent({ logo, title }) {
    return (
        <header className='bg-dark p-3 text-center text-light'>
            <img src={logo} alt='logo' />
            <h1>{title}</h1>
        </header>
    );
}

LogoHeaderComponent.propTypes = {
    logo: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
};
