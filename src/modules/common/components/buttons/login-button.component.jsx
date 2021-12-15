import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

export function LoginButtonComponent({ extraClasses, iconClass }) {
    const { loginWithRedirect } = useAuth0();
    return (
        <li className={`nav-item p-2 ${extraClasses ? extraClasses : ''}`}>
            <button className='nav-link' onClick={() => loginWithRedirect()}>
                {iconClass ? <i className={iconClass} /> : ''}
                {iconClass ? ' ' : ''}Log In
            </button>
        </li>
    );
}

LoginButtonComponent.propTypes = {
    extraClasses: PropTypes.string,
    iconClass: PropTypes.string,
};
