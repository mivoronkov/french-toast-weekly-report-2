import React from 'react';
import PropTypes from 'prop-types';

export function SelectingReportCharacteristics({ setStateLink }) {
    return (
        <ul className='pagination pagination-sm my-3'>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() => setStateLink('overall')}>
                    Overall
                </button>
            </li>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() => setStateLink('morale')}>
                    Morale
                </button>
            </li>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() => setStateLink('stress')}>
                    Stress
                </button>
            </li>
            <li className='page-item'>
                <button
                    className='page-link bg-dark'
                    onClick={() => setStateLink('workload')}>
                    Workload
                </button>
            </li>
        </ul>
    );
}
SelectingReportCharacteristics.propTypes = {
    setStateLink: PropTypes.function,
};
