import React from 'react';
import PropTypes from 'prop-types';
import { ReportCalendar } from '../common/components/topbar/report-calendar.component';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { TeamReportsExpandAllButton } from './team-reports-expand-all-button.component';

export function TeamReportsContent({ previousPeriod, currentPeriod, members }) {
    return (
        <div className='d-flex flex-column align-items-center w-100'>
            <div className='d-flex flex-column align-items-center mt-3 mb-5'>
                <ReportCalendar
                    previousPeriod={previousPeriod}
                    currentPeriod={currentPeriod}
                />
            </div>
            <div className='d-flex flex-column align-items-center w-100 pb-5'>
                <SectionLabel labelText={'IMMEDIATE TEAM'} />
                <TeamReportsExpandAllButton data={members}>
                    <div className='row flex-nowrap bg-white w-85 align-items-center mb-2 mx-0'>
                        <div className='py-3 col-lg-7'></div>
                        <div className='col-lg-5 row flex-nowrap justify-content-around p-0 m-0'>
                            <p className='col text-center py-1 m-0'>Morale</p>
                            <p className='col text-center py-1 m-0'>Stress</p>
                            <p className='col text-center py-1 m-0'>Workload</p>
                            <p className='col'></p>
                        </div>
                    </div>
                </TeamReportsExpandAllButton>
            </div>
        </div>
    );
}

TeamReportsContent.propTypes = {
    previousPeriod: PropTypes.string.isRequired,
    currentPeriod: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
            avatarPath: PropTypes.string,
            weeklyInformation: PropTypes.arrayOf(
                PropTypes.shape({
                    stateName: PropTypes.string,
                    stateLevel: PropTypes.number,
                    comments: PropTypes.string,
                })
            ),
            weeklyNotations: PropTypes.arrayOf(
                PropTypes.shape({
                    text: PropTypes.string,
                    title: PropTypes.string,
                })
            ),
        })
    ),
};
