import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export function AnchorDarkLink({ anchor, ...props }) {
    return (
        <li className='page-item'>
            <NavLink
                to={anchor}
                className={({ isActive }) =>
                    isActive
                        ? 'page-link bg-dark text-warning'
                        : 'page-link bg-dark'
                }>
                {props.children}
            </NavLink>
        </li>
    );
}
AnchorDarkLink.propTypes = {
    children: PropTypes.any,
    anchor: PropTypes.string,
};
