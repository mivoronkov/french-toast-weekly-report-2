import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

export function SignupButtonComponent({ extraClasses, iconClass }) {
    const { loginWithRedirect } = useAuth0();
    return (
        <li className={`nav-item p-2 ${extraClasses ? extraClasses : ''}`}>
            <button
                className='nav-link'
                onClick={() =>
                    loginWithRedirect({
                        screen_hint: 'signup',
                    })
                }>
                {iconClass ? <i className={iconClass} /> : ''}
                {iconClass ? ' ' : ''}Sign up
            </button>
        </li>
    );
}

SignupButtonComponent.propTypes = {
    extraClasses: PropTypes.string,
    iconClass: PropTypes.string,
};
