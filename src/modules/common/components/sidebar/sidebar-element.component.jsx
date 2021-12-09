import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export function SidebarElementComponent({
    elementName,
    extraClasses,
    iconClass,
    link = '/',
}) {
    return (
        <li className={`nav-item p-2 ${extraClasses ? extraClasses : ''}`}>
            <NavLink
                className={({ isActive }) => {
                    return isActive
                        ? 'nav-link text-warning active'
                        : 'nav-link';
                }}
                to={link}>
                {elementName}
                {iconClass ? <i className={iconClass} /> : ''}
            </NavLink>
        </li>
    );
}

SidebarElementComponent.propTypes = {
    elementName: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    iconClass: PropTypes.string,
    link: PropTypes.string,
};
