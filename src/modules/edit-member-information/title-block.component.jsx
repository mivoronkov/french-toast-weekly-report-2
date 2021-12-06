import React from 'react';
import PropTypes from 'prop-types';

export function TitleBlockComponent({ title, children }) {
    return (
        <>
            <h2 className='content-block-title fw-bold'>
                <b>{title}</b>
            </h2>
            <p className='mb-5'>{children}</p>
        </>
    );
}

TitleBlockComponent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
};
