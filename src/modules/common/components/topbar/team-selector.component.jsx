import React from 'react';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';

export function TeamSelector({ ...props }) {
    return (
        <ul className='pagination pagination-sm my-3'>
            <AnchorDarkLink anchor={'team_reports.html'}>
                Immediate Team
            </AnchorDarkLink>
            <AnchorDarkLink>Extended Team</AnchorDarkLink>
        </ul>
    );
}
