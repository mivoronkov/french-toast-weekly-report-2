import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export function TeamHeaderContainerComponent() {
    let navigate = useNavigate();

    useEffect(() => {
        navigate({ pathname: 'immediate-team', search: '?team=immediate' });
    }, []);
    return (
        <div className='flex-grow-1 overflow-auto'>
            <Outlet />
        </div>
    );
}
