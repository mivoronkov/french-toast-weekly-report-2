import React from 'react';
import PropTypes from 'prop-types';
import { AnchorDarkLink } from '../buttons/anchor-dark-link.component';
import { useSearchParams, useParams } from 'react-router-dom';

export function ReportCalendar({ previousPeriod, currentPeriod }) {
    const [searchParams] = useSearchParams();
    const team = searchParams.get('team');
    const params = useParams();

    const baseUrl = `/companies/${params.companyId}/members/${params.id}/team-reports/`;
    const currentReportsUrl = `${baseUrl}current-reports`;
    const oldReportsUrl = `${baseUrl}old-reports`;

    return (
        <ul className='pagination pagination-sm my-3'>
            <AnchorDarkLink
                activeParam={{ param: 'week', value: 'previous' }}
                anchor={`${currentReportsUrl}?team=${team}&week=previous`}>
                Previous period:{previousPeriod}
            </AnchorDarkLink>
            <AnchorDarkLink
                activeParam={{ param: 'week', value: 'current' }}
                anchor={`${currentReportsUrl}?team=${team}&week=current`}>
                Current period:{currentPeriod}
            </AnchorDarkLink>
            <AnchorDarkLink
                activeParam={{ param: 'filter', value: '' }}
                anchor={`${oldReportsUrl}?team=${team}&filter=overall`}>
                Older Reports
            </AnchorDarkLink>
        </ul>
    );
}

ReportCalendar.propTypes = {
    previousPeriod: PropTypes.string,
    currentPeriod: PropTypes.string,
};
