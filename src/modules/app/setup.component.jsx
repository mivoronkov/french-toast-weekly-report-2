import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { setTokenToStore } from '../api/api-axios';
import { getUserFromDB } from '../store/user-in-d-b-store';
import { setIsWaitingResponse } from '../store/user-request-store';

// Currently not used component
export function Initialisation() {
    const { getAccessTokenSilently } = useAuth0();
    useEffect(() => {
        (async () => {
            setIsWaitingResponse(true);
            try {
                const token = await getAccessTokenSilently();
                setTokenToStore(token);
                getUserFromDB();
            } catch (error) {
                console.error(error);
                return error;
            } finally {
                setIsWaitingResponse(false);
            }
        })();
    }, [getAccessTokenSilently]);
    return null;
}
