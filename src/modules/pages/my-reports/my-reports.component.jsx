import React from 'react';
import PropTypes from 'prop-types';
import { ProfileHeaderComponent } from '../../headers/profile-header/profile-header.component';
import { MyReportsContent } from '../../my-reports/my-reports-contetnt.component';

export function MyReports() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <ProfileHeaderComponent members={members} />
            <MyReportsContent
                previousPeriod={previousPeriod}
                currentPeriod={currentPeriod}
                members={members}
            />
        </main>
    );
}
