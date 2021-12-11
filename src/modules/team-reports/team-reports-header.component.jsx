import React from 'react';
import PropTypes from 'prop-types';
import { TeamSelector } from '../common/components/topbar/team-selector.component';
import { TeamReportsNumberAvatar } from './team-reports-number-avatar.component';
import { AvatarComponent } from '../common/components/avatar/avatar.component';

export function TeamReportsHeader({ members, maxAvatarsDisplayed = 4 }) {
    let hasSomeWeeklyReports = false;
    for (let i = 0; i < members.length; i++) {
        if (
            members[i].weeklyInformation &&
            members[i].weeklyInformation.length > 0
        ) {
            hasSomeWeeklyReports = true;
            break;
        }
    }
    let avatarRowElements = [];
    for (let i = 0; i < Math.min(members.length, maxAvatarsDisplayed); ++i) {
        avatarRowElements.push(
            <div
                className='col'
                style={{
                    zIndex: `${maxAvatarsDisplayed - i}`,
                    transform: `translate(${
                        // TODO: This magic is not correct for values less than 4, need fix
                        100 - (100 / maxAvatarsDisplayed) * (i + 2)
                    }%)`,
                }}>
                <AvatarComponent
                    lastName={members[i].lastName}
                    firstName={members[i].firstName}
                    avatarPath={members[i].avatarPath}
                />
            </div>
        );
    }
    if (members.length > maxAvatarsDisplayed) {
        avatarRowElements.push(
            <div
                className='col'
                style={{
                    zIndex: `${maxAvatarsDisplayed + 1}`,
                    transform: `translate(${-200 / maxAvatarsDisplayed}%)`,
                }}>
                <TeamReportsNumberAvatar
                    number={members.length - maxAvatarsDisplayed}
                />
            </div>
        );
    }
    return (
        <header className='d-flex flex-column justify-content-between align-items-center text-light p-4 bg-dark'>
            <TeamSelector />
            <div className='row gx-0 mt-2'>{avatarRowElements}</div>
            <h2 className='mt-4'>
                Your team{' '}
                <strong>
                    has {hasSomeWeeklyReports ? '' : 'not '}submitted reports
                </strong>{' '}
                this week.
            </h2>
        </header>
    );
}

TeamReportsHeader.propTypes = {
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
    maxAvatarsDisplayed: PropTypes.number,
};
