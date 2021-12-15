import React from 'react';
const loadingImg =
    'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

export function Loading() {
    return (
        <div className='h-100 d-flex justify-content-center align-items-center'>
            <div>
                <div className='spinner'>
                    <img src={loadingImg} alt='Loading...' />
                </div>
            </div>
        </div>
    );
}
