import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Outlet, useNavigate } from 'react-router-dom';
import { WeeklyReportHistoryHeader } from '../../headers/weekly-report-hisory-header/weekly-report-hisory-header.component';
import { ReportCalendar } from '../../common/components/topbar/report-calendar.component';
import { Helmet } from 'react-helmet';
import { weeklyLabel } from '../../common/utils/get-week';

export function WeeklyReportHistory({
    previousPeriod,
    currentPeriod,
    totalMood,
    membersMood,
}) {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('current');
    }, []);

    const weeks = weeklyLabel(new Date());

    return (
        <main className='flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Weekly report history</title>
            </Helmet>
            <WeeklyReportHistoryHeader />
            <div className='d-flex flex-column align-items-center w-100'>
                <ReportCalendar
                    currentPeriod={weeks.currentWeek}
                    previousPeriod={weeks.previousWeek}
                />
                <Outlet />
            </div>
        </main>
    );
}

WeeklyReportHistory.propTypes = {
    previousPeriod: PropTypes.string,
    currentPeriod: PropTypes.string,
    totalMood: PropTypes.shape({
        overall: PropTypes.shape({
            memberName: PropTypes.string,
            mood: PropTypes.arrayOf(PropTypes.number),
        }),
        morale: PropTypes.shape({
            memberName: PropTypes.string,
            mood: PropTypes.arrayOf(PropTypes.number),
        }),
        stress: PropTypes.shape({
            memberName: PropTypes.string,
            mood: PropTypes.arrayOf(PropTypes.number),
        }),
        workload: PropTypes.shape({
            memberName: PropTypes.string,
            mood: PropTypes.arrayOf(PropTypes.number),
        }),
    }),
    membersMood: PropTypes.arrayOf(
        PropTypes.shape({
            memberName: PropTypes.string,
            mood: PropTypes.arrayOf(PropTypes.number),
        })
    ),
};
