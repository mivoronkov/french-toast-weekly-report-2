import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectingReportCharacteristics } from './selecting-report-characteristics.component';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { WeeklyLabels } from './weekly-labels.component';
import { ReportEmotionalCard } from './report-card.component';
import {
    OldPeriodReports,
    getOldTeamReports,
} from '../store/old-reports-store';
import { useStore } from 'effector-react';
import { useParams, useSearchParams } from 'react-router-dom';
import { weeklyLabel } from '../common/utils/get-week';
import { ReportCalendar } from '../common/components/topbar/report-calendar.component';

export function OldReports() {
    const oldReports = useStore(OldPeriodReports);
    const [searchParams] = useSearchParams();
    const team = searchParams.get('team');
    const filter = searchParams.get('filter');
    const params = useParams();

    useEffect(() => {
        getOldTeamReports({
            companyId: params.companyId,
            memberId: params.id,
            team: team,
            filter: filter,
        });
    }, [searchParams, params]);

    let membersEmotionalConsist = oldReports?.overviewReportsDtos?.map(
        (oldReport) => {
            return (
                <ReportEmotionalCard
                    memberName={`${oldReport.firstName} ${oldReport.lastName}`}
                    mood={oldReport.statusLevel}
                    key={oldReport.authorId}
                />
            );
        }
    );
    let averageReport = null;
    if (oldReports !== null) {
        averageReport = (
            <ReportEmotionalCard
                memberName={oldReports.averageOldReportDto.filterName}
                mood={oldReports.averageOldReportDto.statusLevel}
                key={'averageBar'}
            />
        );
    }
    const weeks = weeklyLabel(new Date());

    return (
        <div className='d-flex flex-column align-items-center w-100'>
            <ReportCalendar
                currentPeriod={weeks.currentWeek}
                previousPeriod={weeks.previousWeek}
            />
            <SelectingReportCharacteristics team={team} />
            <SectionLabel labelText={`${team} team average`} />
            <WeeklyLabels />
            {averageReport}
            <SectionLabel labelText={`${team} team`} />
            <WeeklyLabels />
            {membersEmotionalConsist}
        </div>
    );
}
OldReports.propTypes = {
    team: PropTypes.strong,
};
