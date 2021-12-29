import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

// Currently not used component
export function Login() {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    loginWithRedirect().then(() => {
        navigate('/');
    });
    return null;
}
