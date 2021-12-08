import React from 'react';
import PropTypes from 'prop-types';
import { AvatarComponent } from '../common/components/avatar/avatar.component';

export function MyReportsHeader() {
    return (
        <header className='d-flex flex-column justify-content-between align-items-center text-light p-4 bg-dark'>
            <AvatarComponent />
        </header>
    );
}
