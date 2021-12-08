import React from 'react';
import PropTypes from 'prop-types';

import { ExpandAllButton } from '../common/components/buttons/expand-all-button.component';
import { LineItem } from '../my-reports/line-item.component';
import { ExpandCards } from './expand-cards.component';
import { SectionLabel } from '../common/components/labels/section-label.component';

export function MyReportsContent({ data }) {
    return (
        <div className='d-flex flex-column align-items-center w-100'>
            <SectionLabel labelText={'past weekly reports'} />
            <ExpandAllButton>
                <LineItem />
                <ExpandCards data={data} />
            </ExpandAllButton>
        </div>
    );
}

MyReportsContent.propTypes = {
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
