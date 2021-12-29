import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'effector-react';
import { userInDBStore } from '../store/user-in-d-b-store';
import { getOldTeamReports } from '../store/old-reports-store';
import { SelectingReportButton } from '../common/components/buttons/selecting-report-button.component';
import { useParams, useSearchParams } from 'react-router-dom';

export function SelectingReportCharacteristics({ team }) {
    const [activeButton, setButton] = useState('overall');
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const apiParameters = {
        companyId: params.companyId,
        memberId: params.id,
        team: searchParams.get('team'),
    };

    const filters = ['overall', 'morale', 'stress', 'workload'];
    return (
        <ul className='pagination pagination-sm my-3'>
            {filters.map((f, index) => (
                <SelectingReportButton
                    filter={f}
                    selectedFilter={activeButton}
                    apiParameters={apiParameters}
                    setFilter={(arg) => {
                        setSearchParams({
                            team: apiParameters.team,
                            filter: arg,
                        });
                        setButton(arg);
                    }}
                    key={index}
                />
            ))}
        </ul>
    );
}
SelectingReportCharacteristics.propTypes = {
    team: PropTypes.string,
};
