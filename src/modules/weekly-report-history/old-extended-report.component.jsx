import React, { useEffect, useState } from 'react';
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
import { userInDBStore } from '../store/user-in-d-b-store';
import { CurrentReports } from './current-report.componen';

export function OldReports({ team }) {
    const userInDB = useStore(userInDBStore);
    const oldReports = useStore(OldPeriodReports);
    useEffect(() => {
        getOldTeamReports({
            companyId: userInDB.companyId,
            memberId: userInDB.id,
            team: team,
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
        <div className='d-flex flex-column align-items-center w-100'>
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
