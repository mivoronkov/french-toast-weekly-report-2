import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TeamReportsHeader } from '../../team-reports/team-reports-header.component';
import { Helmet } from 'react-helmet';
import { ReportCalendar } from '../../common/components/topbar/report-calendar.component';
import { weeklyLabel } from '../../common/utils/get-week';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { CurrentReports } from '../../weekly-report-history/current-report.componen';
import { OldReports } from '../../weekly-report-history/old-extended-report.component';

export function TeamReports({ previousPeriod, currentPeriod, members }) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Team reports</title>
            </Helmet>
            <TeamReportsHeader />
            <Outlet />
        </main>
    );
}

TeamReports.propTypes = {
    previousPeriod: PropTypes.string.isRequired,
    currentPeriod: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
            avatarPath: PropTypes.string,
            weeklyInformation: PropTypes.arrayOf(
                PropTypes.shape({
                    stateName: PropTypes.string,
                    stateLevel: PropTypes.number,
                    comments: PropTypes.string,
                })
            ),
            weeklyNotations: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string,
                    title: PropTypes.string,
                })
            ),
        })
    ),
};
