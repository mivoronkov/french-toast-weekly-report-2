import React from 'react';
import PropTypes from 'prop-types';
import { AnchorDarkLink } from '../../common/components/buttons/anchor-dark-link.component';
import { TeamSelector } from '../../common/components/topbar/team-selector.component';

export function WeeklyReportHistoryHeader() {
    return (
        <header className='d-flex flex-column bg-dark p-3 align-items-center text-light'>
            <TeamSelector />
            <h1 className='my-2'>Weekly report history</h1>
            <h4 className='mt-3'>
                Get a bigger picture of how your tem has been doing over time.
            </h4>
        </header>
    );
}
