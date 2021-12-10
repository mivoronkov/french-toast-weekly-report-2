import React from 'react';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';

export function TeamSelector() {
    return (
        <ul className='pagination pagination-sm my-3 position-absolute start-50'>
            <AnchorDarkLink anchor={'immediate-team'}>
                Immediate Team
            </AnchorDarkLink>
            <AnchorDarkLink anchor={'extended-team'}>
                Extended Team
            </AnchorDarkLink>
        </ul>
    );
}
