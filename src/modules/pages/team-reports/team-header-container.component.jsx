import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export function TeamHeaderContainerComponent() {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('immediate-team');
    }, []);
    return (
        <div className='flex-grow-1 overflow-auto'>
            <Outlet />
        </div>
    );
}
