import React from 'react';
import PropTypes from 'prop-types';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';

export function ReportCalendar({ previousPeriod, currentPeriod }) {
    return (
        <ul className='pagination pagination-sm my-3'>
            <AnchorDarkLink anchor={'/'}>
                Previous period:{previousPeriod}
            </AnchorDarkLink>
            <AnchorDarkLink anchor={'/'}>
                Current period:{currentPeriod}
            </AnchorDarkLink>
            <AnchorDarkLink anchor={'/'}>Older Reports</AnchorDarkLink>
        </ul>
    );
}

ReportCalendar.propTypes = {
    previousPeriod: PropTypes.string,
    currentPeriod: PropTypes.string,
};
