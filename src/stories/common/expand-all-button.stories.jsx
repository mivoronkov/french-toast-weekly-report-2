import React from 'react';

import {ExpandAll} from '../../modules/common/components/buttons/expand-all-button.component';
import {ExpandCard} from '../my-reports/expand-report-card.stories'
export default {
    title: 'My reports',
    component: ExpandAll
}

const Template = () => {
    return (
        <div>
            <ExpandAll />
            <ExpandCard {...ExpandCard.args}/>
            <ExpandCard {...ExpandCard.args}/>
            <ExpandCard {...ExpandCard.args}/>
        </div>
    )
};
export const ExpandAllButton = Template.bind({});