import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { setTokenTOStore } from '../api/api-axios';
import { getUser } from '../store/user-store';
import { waitingResponse } from '../store/user-request-store';

export function Initialisation() {
    const { getAccessTokenSilently } = useAuth0();
    useEffect(() => {
        (async () => {
            waitingResponse(true);
            try {
                const token = await getAccessTokenSilently();
                setTokenTOStore(token);
                getUser();
            } catch (error) {
                console.error(error);
                return error;
            } finally {
                waitingResponse(false);
            }
        })();
    }, [getAccessTokenSilently]);
    return null;
}
