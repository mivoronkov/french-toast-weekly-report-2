import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import { SignOutButtonComponent } from './signout-button.component';
import { LoginButtonComponent } from './login-button.component';

export function AuthenticationButtonComponent() {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? (
        <SignOutButtonComponent iconClass={'bi bi-arrow-left-square-fill'} />
    ) : (
        <LoginButtonComponent iconClass={'bi bi-arrow-right-square-fill'} />
    );
}

AuthenticationButtonComponent.propTypes = {};
