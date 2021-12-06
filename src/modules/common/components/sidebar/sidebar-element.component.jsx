import React from 'react';

import PropTypes from 'prop-types';

export function SidebarElementComponent({
    elementName,
    extraClasses,
    extraLinkClasses,
    iconClass,
}) {
    return (
        <li className={`nav-item p-2${extraClasses ? ' ' + extraClasses : ''}`}>
            <a
                className={`nav-link${
                    extraLinkClasses ? ' ' + extraLinkClasses : ''
                }`}
                href='#'>
                {iconClass ? <i className={iconClass} /> : ''}
                {elementName}
            </a>
        </li>
    );
}

SidebarElementComponent.propTypes = {
    elementName: PropTypes.string.isRequired,
    extraClasses: PropTypes.string,
    extraLinkClasses: PropTypes.string,
    iconClass: PropTypes.string,
};
