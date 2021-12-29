import React from 'react';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';
import { useParams } from 'react-router-dom';

export function TeamSelector() {
    const params = useParams();
    return (
        <ul className='pagination pagination-sm my-2'>
            <AnchorDarkLink
                activeParam={{ param: 'team', value: 'immediate' }}
                anchor={`/companies/${params.companyId}/members/${params.id}/team-reports/current-reports?team=immediate&week=current`}>
                Immediate Team
            </AnchorDarkLink>
            <AnchorDarkLink
                activeParam={{ param: 'team', value: 'extended' }}
                anchor={`/companies/${params.companyId}/members/${params.id}/team-reports/current-reports?team=extended&week=current`}>
                Extended Team
            </AnchorDarkLink>
        </ul>
    );
}
