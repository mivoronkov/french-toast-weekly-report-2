import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { ExpandAllButton } from '../common/components/buttons/expand-all-button.component';
import { LineItem } from '../my-reports/line-item.component';
import { TeamReportsCards } from '../team-reports/team-reports-cards.component';
import { getClosesReport, reportsStore } from '../store/weekly-report-store';
import { useStore } from 'effector-react';
import { userInDBStore } from '../store/user-in-d-b-store';
import { useParams, useSearchParams } from 'react-router-dom';
import { ReportCalendar } from '../common/components/topbar/report-calendar.component';
import { weeklyLabel } from '../common/utils/get-week';

export function CurrentReports({ team, week }) {
    let [searchParams] = useSearchParams();
    const weekParam = searchParams.get('week');
    const teamParam = searchParams.get('team');
    const params = useParams();

    const closesReport = useStore(reportsStore);

    useEffect(() => {
        getClosesReport({
            companyId: params.companyId,
            memberId: params.id,
            team: teamParam,
            week: weekParam,
        });
    }, [teamParam, weekParam, params]);

    const weeks = weeklyLabel(new Date());

    return (
        <div className='d-flex flex-column align-items-center w-100 pb-5'>
            <ReportCalendar
                currentPeriod={weeks.currentWeek}
                previousPeriod={weeks.previousWeek}
            />
            <SectionLabel labelText={`${teamParam} team`} />
            <ExpandAllButton>
                <LineItem />
                <TeamReportsCards data={closesReport} />
            </ExpandAllButton>
        </div>
    );
}
CurrentReports.propTypes = {
    team: PropTypes.strong,
    week: PropTypes.strong,
};
