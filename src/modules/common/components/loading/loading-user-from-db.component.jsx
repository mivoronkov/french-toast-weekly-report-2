import React from 'react';
import loadingImg from '../../../../img/loading.svg';
import { setErrorToStore } from '../../../store/error-store';
import { setUserToStore } from '../../../store/user-store';
import { getUserWithFetch } from '../../../../utils';
import { setTriedGetUserFromDBToStore } from '../../../store/tride-to-get-user-from-db-store';
import { useAuth0 } from '@auth0/auth0-react';
import { setTokenTOStore } from '../../../api/api-axios';

export function LoadingUserFromDB() {
    const { getAccessTokenSilently } = useAuth0();
    const getUserFromDBToUserStore = async () => {
        try {
            const token = await getAccessTokenSilently();
            setTokenTOStore(token);
            const { user, error, responseStatus } = await getUserWithFetch(
                token
            );
            if (responseStatus && responseStatus === 404) {
                // Если получили 404 при запросе пользователя, значит ему надо пройти Complete registration,
                // ошибку возвращать не надо
                return;
            }
            if (error !== null) {
                setErrorToStore(error);
            } else {
                setUserToStore(user);
            }
        } catch (error) {
            console.error(error);
            return error;
        } finally {
            setTriedGetUserFromDBToStore(true);
        }
    };

    return (
        <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex justify-content-center'>
                Please wait, loading...
            </div>
            <div>
                <div className='spinner'>
                    <img src={loadingImg} alt='Loading...' />
                </div>
            </div>
            {(async () => {
                await getUserFromDBToUserStore();
            })()
                ? null
                : null}
        </div>
    );
}
