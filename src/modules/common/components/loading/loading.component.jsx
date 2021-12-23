import React from 'react';
import loadingImg from '../../../../img/loading.svg';

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
