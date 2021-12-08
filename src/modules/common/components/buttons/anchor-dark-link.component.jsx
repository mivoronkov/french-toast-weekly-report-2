import React from 'react';
import PropTypes from 'prop-types';

export function AnchorDarkLink({ anchor, ...props }) {
    return (
        <li className='page-item'>
            <a href={anchor} className='page-link bg-dark'>
                {props.children}
            </a>
        </li>
    );
}
AnchorDarkLink.propTypes = {
    children: PropTypes.any,
    anchor: PropTypes.string,
};
