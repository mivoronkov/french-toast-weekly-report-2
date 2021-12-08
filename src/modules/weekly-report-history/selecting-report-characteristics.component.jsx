import React from 'react';
import { AnchorDarkLink } from '../common/components/buttons/anchor-dark-link.component';

export function SelectingReportCharacteristics() {
    return (
        <ul className='pagination pagination-sm my-3'>
            <AnchorDarkLink>Overall</AnchorDarkLink>
            <AnchorDarkLink>Morale</AnchorDarkLink>
            <AnchorDarkLink>Stress</AnchorDarkLink>
            <AnchorDarkLink>Workload</AnchorDarkLink>
        </ul>
    );
}
