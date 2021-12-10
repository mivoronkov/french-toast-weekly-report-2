import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { WeeklyReportHistoryHeader } from '../../headers/weekly-report-hisory-header/weekly-report-hisory-header.component';
import { SelectingReportCharacteristics } from '../../weekly-report-history/selecting-report-characteristics.component';
import { SectionLabel } from '../../common/components/labels/section-label.component';
import { WeeklyLabels } from '../../weekly-report-history/weekly-labels.component';
import { ReportCalendar } from '../../common/components/topbar/report-calendar.component';
import { ReportEmotionalCard } from '../../weekly-report-history/report-card.component';

export function WeeklyReportHistory({
    previousPeriod,
    currentPeriod,
    totalMood,
    membersMood,
}) {
    const [showingTotalMood, setShowingTotalMood] = useState('overall');
    let membersEmotionalConsist = membersMood.map((member, index) => (
        <ReportEmotionalCard
            memberName={member.memberName}
            mood={member.mood}
            key={index}
        />
    ));
    return (
        <div className='main-background flex-grow-1 overflow-auto'>
            <WeeklyReportHistoryHeader />
            <div className='d-flex flex-column align-items-center w-100'>
                <ReportCalendar
                    currentPeriod={previousPeriod}
                    previousPeriod={currentPeriod}
                />
                <SelectingReportCharacteristics
                    setStateLink={setShowingTotalMood}
                />
                <SectionLabel labelText={'extended team average'} />
                <WeeklyLabels />
                <ReportEmotionalCard
                    mood={totalMood[showingTotalMood].mood}
                    memberName={totalMood[showingTotalMood].memberName}
                />
                <SectionLabel labelText={'extended team'} />
                <WeeklyLabels />
                {membersEmotionalConsist}
            </div>
        </div>
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
