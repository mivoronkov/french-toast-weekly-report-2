import React from 'react';
import { CompleteRegistrationContent } from '../../authorization/complete-registration-content.component';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';
import { Helmet } from 'react-helmet';

export function CompleteRegistration() {
    return (
        <main className='flex-grow-1 overflow-auto mx-0'>
            <Helmet>
                <title>Complete registration</title>
            </Helmet>
            <TextHeaderComponent title={'Please complete registration'} />
            <CompleteRegistrationContent />
        </main>
    );
}
