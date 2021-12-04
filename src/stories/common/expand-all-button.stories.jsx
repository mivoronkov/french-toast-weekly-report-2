import React from 'react';

import {ExpandAll} from '../../modules/common/components/buttons/expand-all-button.component';
import {ExpandCard} from '../my-reports/expand-report-card.stories'
export default {
    title: 'My reports',
    component: ExpandAll
}

const Template = (args) => {
    return (
        <div>
            <ExpandAll {...args}/>
            <ExpandCard {...ExpandCard.args}/>
            <ExpandCard {...ExpandCard.args}/>
            <ExpandCard {...ExpandCard.args}/>
        </div>
    )
};
export const ExpandAllButton = Template.bind({});
ExpandAllButton.args = {
    idItems: ['morale1', 'monday3', 'yellow6', ExpandCard.args.duration]
};