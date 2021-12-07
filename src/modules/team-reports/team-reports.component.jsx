import React from 'react';
import PropTypes from 'prop-types';
import { TeamReportsHeader } from './team-reports-header.component';
import { TeamReportsContent } from './team-reports-content.component';

export function TeamReports({ previousPeriod, currentPeriod, members }) {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <TeamReportsHeader members={members} />
            <TeamReportsContent
                previousPeriod={previousPeriod}
                currentPeriod={currentPeriod}
                members={members}
            />
        </main>
    );
}

TeamReports.propTypes = {
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
