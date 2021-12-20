import React from 'react';
import PropTypes from 'prop-types';

export function ContentBlockComponent({ title, children, className = '' }) {
    return (
        <div className={`mt-3 mb-5 ${className}`}>
            <div className='fw-bold text-uppercase'>{title}</div>
            <hr className='mt-1' />
            {children}
        </div>
    );
}

ContentBlockComponent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    className: PropTypes.string,
};
