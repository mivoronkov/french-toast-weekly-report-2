import React from 'react';
import PropTypes from 'prop-types';
import { ReportCalendar } from '../common/components/topbar/report-calendar.component';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { TeamReportsCards } from './team-reports-cards.component';
import { ExpandAllButton } from '../common/components/buttons/expand-all-button.component';
import { LineItem } from '../my-reports/line-item.component';

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
                <ExpandAllButton>
                    <LineItem />
                    <TeamReportsCards data={members} />
                </ExpandAllButton>
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
