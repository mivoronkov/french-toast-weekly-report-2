import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { ExpandAllButton } from '../common/components/buttons/expand-all-button.component';
import { LineItem } from '../my-reports/line-item.component';
import { TeamReportsCards } from '../team-reports/team-reports-cards.component';
import { getClosesReport, reportsStore } from '../store/weekly-report-store';
import { useStore } from 'effector-react';
import { userInDBStore } from '../store/user-in-d-b-store';

export function CurrentReports({ team, week }) {
    const userInDB = useStore(userInDBStore);
    const closesReport = useStore(reportsStore);

    useEffect(() => {
        getClosesReport({
            companyId: userInDB.companyId,
            memberId: userInDB.id,
            team: team,
            week: week,
        });
    }, [team, week]);
    return (
        <div className='d-flex flex-column align-items-center w-100 pb-5'>
            <SectionLabel labelText={`${team} team`} />
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
