import React from 'react';
import PropTypes from 'prop-types';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';

export function ReportCalendar({ previousPeriod, currentPeriod }) {
    return (
        <ul className='pagination pagination-sm my-3'>
            <AnchorDarkLink anchor={'previous'}>
                Previous period:{previousPeriod}
            </AnchorDarkLink>
            <AnchorDarkLink anchor={'current'}>
                Current period:{currentPeriod}
            </AnchorDarkLink>
            <AnchorDarkLink anchor={'older'}>Older Reports</AnchorDarkLink>
        </ul>
    );
}

ReportCalendar.propTypes = {
    previousPeriod: PropTypes.string,
    currentPeriod: PropTypes.string,
};
