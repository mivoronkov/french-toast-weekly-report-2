import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Login() {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    const state = useLocation();
    loginWithRedirect().then(() => {
        navigate(state?.pathname || '/');
    });
}
