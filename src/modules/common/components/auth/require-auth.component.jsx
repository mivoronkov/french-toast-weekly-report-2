import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

export function RequireAuth({ children }) {
    const { user } = useAuth0();
    let location = useLocation();

    return user ? (
        children
    ) : (
        <Navigate to='/login' state={{ from: location.pathname }} />
    );
}

RequireAuth.propTypes = {
    children: PropTypes.any,
};
