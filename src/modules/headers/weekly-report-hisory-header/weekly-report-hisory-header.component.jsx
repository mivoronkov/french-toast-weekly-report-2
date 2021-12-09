import React from 'react';
import PropTypes from 'prop-types';
import { AnchorDarkLink } from '../../common/components/buttons/anchor-dark-link.component';

export function WeeklyReportHistoryHeader() {
    return (
        <header className='d-flex flex-column bg-dark p-5 align-items-center text-light'>
            <ul className='pagination pagination-sm my-3'>
                <AnchorDarkLink anchor={'/team-reports.html'}>
                    Immediate Team
                </AnchorDarkLink>
                <AnchorDarkLink anchor={'/weekly-report-history.html'}>
                    Weekly report history
                </AnchorDarkLink>
            </ul>
            <h1 className='my-3'>Weekly report history</h1>
            <h4 className='mt-4'>
                Get a bigger picture of how your tem has been doing over time.
            </h4>
        </header>
    );
}
