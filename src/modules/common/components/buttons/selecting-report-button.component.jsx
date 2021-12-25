import React from 'react';
import PropTypes from 'prop-types';
import { getOldTeamReports } from '../../../store/old-reports-store';

export function SelectingReportButton({
    filter,
    selectedFilter,
    apiParameters,
    setFilter,
}) {
    return (
        <li
            className={`page-item ${
                selectedFilter === filter ? 'active' : ''
            }`}>
            <button
                className='page-link bg-dark text-capitalize'
                onClick={() => {
                    setFilter(filter);
                    getOldTeamReports({
                        ...apiParameters,
                        filter: filter,
                    });
                }}>
                {filter}
            </button>
        </li>
    );
}

SelectingReportButton.propTypes = {
    filter: PropTypes.string,
    selectedFilter: PropTypes.string,
    apiParameters: PropTypes.any,
    setFilter: PropTypes.function,
};
