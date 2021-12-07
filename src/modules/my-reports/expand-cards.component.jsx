import React, { useContext } from 'react';
import { ExpandReportCard } from './expand-report-card.component';
import { ExpandAllContext } from '../common/components/buttons/expand-all-button.component';
import PropTypes from 'prop-types';

export function ExpandCards({ data }) {
    const externalControl = useContext(ExpandAllContext);
    return data.map((el, index) => (
        <ExpandReportCard
            weeklyNotations={el.weeklyNotations}
            duration={el.duration}
            weeklyInformation={el.weeklyInformation}
            key={index}
            externalControl={externalControl}
        />
    ));
}

ExpandCards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            duration: PropTypes.string,
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
