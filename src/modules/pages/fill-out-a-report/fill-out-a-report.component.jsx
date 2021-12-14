import React from 'react';
import PropTypes from 'prop-types';
import { FillOutAReportContent } from '../../fill-out-a-report/fill-out-a-report-content.component';
import { Helmet } from 'react-helmet';

export function FillOutAReport({ firstName }) {
    return (
        <main className='p-5 flex-grow-1 overflow-auto'>
            <Helmet>
                <title>Fill out a report</title>
            </Helmet>
            <FillOutAReportContent firstName={firstName} />
        </main>
    );
}

FillOutAReport.propTypes = {
    firstName: PropTypes.string.isRequired,
};
