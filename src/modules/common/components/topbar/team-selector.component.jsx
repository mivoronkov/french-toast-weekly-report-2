import React from 'react';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';

export function TeamSelector() {
    return (
        <ul className='pagination pagination-sm my-2'>
            <AnchorDarkLink anchor={'/team-reports/immediate-team'}>
                Immediate Team
            </AnchorDarkLink>
            <AnchorDarkLink anchor={'/team-reports/extended-team'}>
                Extended Team
            </AnchorDarkLink>
        </ul>
    );
}
