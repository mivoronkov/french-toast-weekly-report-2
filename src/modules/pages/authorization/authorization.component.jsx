import React from 'react';
import PropTypes from 'prop-types';
import { AuthorizationHeader } from '../../headers/authorization-header/authorization-header.component';
import { AuthorizationContent } from '../../authorization/authorization-content.component';

export function Authorization() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <AuthorizationHeader />
            <AuthorizationContent />
        </main>
    );
}

Authorization.propTypes = {};
