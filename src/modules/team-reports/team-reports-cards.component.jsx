import React, { useContext } from 'react';
import { ExpandAllContext } from '../common/components/buttons/expand-all-button.component';
import { TeamReportsLineItem } from './team-reports-line-item.component';
import PropTypes from 'prop-types';

export function TeamReportsCards({ data }) {
    const externalControl = useContext(ExpandAllContext);
    return data.map((el, index) => (
        <TeamReportsLineItem
            firstName={el.firstName}
            lastName={el.lastName}
            weeklyNotations={el.weeklyNotations}
            weeklyInformation={el.weeklyInformation}
            key={index}
            externalControl={externalControl}
        />
    ));
}

TeamReportsCards.propTypes = {
    data: PropTypes.arrayOf(
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
