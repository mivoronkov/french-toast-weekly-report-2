import React from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'effector-react';
import { userStore } from '../store/user-store';
import { getOldExtendReports } from '../store/extended-reports-store';

export function SelectingReportCharacteristics({ team }) {
    const userInDB = useStore(userStore);
    const apiParameters = {
        companyId: userInDB.companyId,
        memberId: userInDB.id,
        team: team,
    };
    return (
        <ul className='pagination pagination-sm my-3'>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() =>
                        getOldExtendReports({
                            ...apiParameters,
                            filter: 'overall',
                        })
                    }>
                    Overall
                </button>
            </li>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() =>
                        getOldExtendReports({
                            ...apiParameters,
                            filter: 'morale',
                        })
                    }>
                    Morale
                </button>
            </li>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() =>
                        getOldExtendReports({
                            ...apiParameters,
                            filter: 'stress',
                        })
                    }>
                    Stress
                </button>
            </li>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() =>
                        getOldExtendReports({
                            ...apiParameters,
                            filter: 'workload',
                        })
                    }>
                    Workload
                </button>
            </li>
        </ul>
    );
}
SelectingReportCharacteristics.propTypes = {
    team: PropTypes.string,
};
