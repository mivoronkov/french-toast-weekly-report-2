import React from 'react';
import PropTypes from 'prop-types';
import { ReportCalendar } from '../common/components/topbar/report-calendar.component';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { ExpandAll } from '../common/components/buttons/expand-all-button.component';
import { TeamReportsLineItem } from './team-reports-line-item.component';

export function TeamReports({ previousPeriod, currentPeriod, members }) {
    let membersReportsInfo = members.map((member, index) => {
        return (
            <TeamReportsLineItem
                firstName={member.firstName}
                lastName={member.lastName}
                reportInfo={member.reportInfo}
                key={index}
            />
        );
    });
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
                <ExpandAll extraClasses={'w-85'} />
                <div className='row flex-nowrap bg-white w-85 align-items-center mb-2 shadow'>
                    <p className='py-2 my-2 col-lg-9'></p>
                    <p className='py-2 my-2 col-auto text-body'>Morale</p>
                    <p className='py-2 my-2 col-auto'>Stress</p>
                    <p className='py-2 my-2 col-auto'>Workload</p>
                </div>
                {membersReportsInfo}
            </div>
        </div>
    );
}

TeamReports.propTypes = {
    previousPeriod: PropTypes.string.isRequired,
    currentPeriod: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
            reportInfo: PropTypes.string,
        })
    ),
};
