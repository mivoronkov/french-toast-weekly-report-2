import React from 'react';
import PropTypes from 'prop-types';
import { AnchorDarkLink } from '../../common/components/buttons/anchor-dark-link.component';

export function WeeklyReportHistoryHeader() {
    return (
        <header className='d-flex flex-column bg-dark p-3 align-items-center text-light'>
            <ul className='pagination pagination-sm my-3'>
                <AnchorDarkLink anchor={'/team-reports/immediate-team'}>
                    Immediate Team
                </AnchorDarkLink>
                <AnchorDarkLink anchor={'/team-reports/extended-team'}>
                    Extended Team
                </AnchorDarkLink>
            </ul>
            <h1 className='my-2'>Weekly report history</h1>
            <h4 className='mt-3'>
                Get a bigger picture of how your tem has been doing over time.
            </h4>
        </header>
    );
}
