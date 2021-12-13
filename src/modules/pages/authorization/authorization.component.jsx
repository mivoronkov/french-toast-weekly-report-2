import React from 'react';
import { AuthorizationContent } from '../../authorization/authorization-content.component';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';

export function Authorization() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <TextHeaderComponent title={'Please log in.'} />
            <AuthorizationContent />
        </main>
    );
}
