import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'effector-react';
import { userStore } from '../store/user-store';
import { getOldTeamReports } from '../store/old-reports-store';
import { SelectingReportButton } from '../common/components/buttons/selecting-report-button.component';

export function SelectingReportCharacteristics({ team }) {
    const [activeButton, setButton] = useState('overall');
    const userInDB = useStore(userStore);
    const apiParameters = {
        companyId: userInDB.companyId,
        memberId: userInDB.id,
        team: team,
    };
    const filters = ['overall', 'morale', 'stress', 'workload'];

    return (
        <ul className='pagination pagination-sm my-3'>
            {filters.map((f, index) => (
                <SelectingReportButton
                    filter={f}
                    selectedFilter={activeButton}
                    apiParameters={apiParameters}
                    setFilter={setButton}
                    key={index}
                />
            ))}
        </ul>
    );
}
SelectingReportCharacteristics.propTypes = {
    team: PropTypes.string,
};
