import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { WeeklyReportHistoryHeader } from '../../headers/weekly-report-hisory-header/weekly-report-hisory-header.component';
import { SelectingReportCharacteristics } from '../../weekly-report-history/selecting-report-characteristics.component';
import { SectionLabel } from '../../common/components/labels/section-label.component';
import { WeeklyLabels } from '../../weekly-report-history/weekly-labels.component';
import { ReportCalendar } from '../../common/components/topbar/report-calendar.component';
import { ReportEmotionalCard } from '../../weekly-report-history/report-card.component';
import { Helmet } from 'react-helmet';
import { weeklyLabel } from '../../common/utils/get-week';
import {
    extendReports,
    getOldExtendReports,
} from '../../store/extended-reports-store';
import { userStore } from '../../store/user-store';
import { useStore } from 'effector-react';

export function WeeklyReportHistory({
    previousPeriod,
    currentPeriod,
    totalMood,
    membersMood,
}) {
    const [showingTotalMood, setShowingTotalMood] = useState('overall');
    const userInDB = useStore(userStore);
    const oldReports = useStore(extendReports);
    useEffect(() => {
        getOldExtendReports({
            companyId: userInDB.companyId,
            memberId: userInDB.id,
            team: 'extended',
            filter: 'overall',
        });
    }, []);
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
    const weeks = weeklyLabel(new Date());
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
                <SelectingReportCharacteristics team={'extended'} />
                <SectionLabel labelText={'extended team average'} />
                <WeeklyLabels />
                {averageReport}
                <SectionLabel labelText={'extended team'} />
                <WeeklyLabels />
                {membersEmotionalConsist}
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
