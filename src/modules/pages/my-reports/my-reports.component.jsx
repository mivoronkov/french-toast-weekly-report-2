import React from 'react';
import PropTypes from 'prop-types';
import { TeamReportsHeader } from '../../team-reports/team-reports-header.component';
import { TeamReportsContent } from '../../team-reports/team-reports-content.component';

export function MyReports() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <TeamReportsHeader members={members} />
            <TeamReportsContent
                previousPeriod={previousPeriod}
                currentPeriod={currentPeriod}
                members={members}
            />
        </main>
    );
}
