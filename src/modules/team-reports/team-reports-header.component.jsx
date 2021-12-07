import React from 'react';
import PropTypes from 'prop-types';
import { TeamSelector } from '../common/components/topbar/team-selector.component';
import { TeamReportsAvatar } from './team-reports-avatar.component';
import { TeamReportsNumberAvatar } from './team-reports-number-avatar.component';

export function TeamReportsHeader({ members, maxAvatarsDisplayed = 4 }) {
    let avatarRowElements = [];
    for (let i = 0; i < Math.min(members.length, maxAvatarsDisplayed); ++i) {
        avatarRowElements.push(
            <TeamReportsAvatar
                lastName={members[i].lastName}
                firstName={members[i].firstName}
                zIndex={maxAvatarsDisplayed - i}
                colStyle={{
                    zIndex: `${maxAvatarsDisplayed - i}`,
                    transform: `translate(${
                        // TODO: This magic is not correct for values less than 4, need fix
                        100 - (100 / maxAvatarsDisplayed) * (i + 2)
                    }%)`,
                }}
            />
        );
    }
    if (members.length > maxAvatarsDisplayed) {
        avatarRowElements.push(
            <TeamReportsNumberAvatar
                number={members.length - maxAvatarsDisplayed}
                zIndex={maxAvatarsDisplayed + 1}
                colStyle={{
                    zIndex: `${maxAvatarsDisplayed + 1}`,
                    transform: `translate(${-200 / maxAvatarsDisplayed}%)`,
                }}
            />
        );
    }
    return (
        <header className='d-flex flex-column justify-content-between align-items-center text-light p-4 bg-dark'>
            <TeamSelector />
            <div className='row gx-0'>{avatarRowElements}</div>
            <h2 className='mt-4'>
                Your team <strong>has not submitted reports</strong> this week.
            </h2>
        </header>
    );
}

TeamReportsHeader.propTypes = {
    members: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string.isRequired,
        })
    ),
    maxAvatarsDisplayed: PropTypes.number,
};
