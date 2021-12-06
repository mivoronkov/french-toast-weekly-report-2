import React from 'react';

import {LineItem} from '../../modules/my-reports/line-item.component';
import {ExpandCard} from "./expand-report-card.stories";

export default {
    title: 'My reports',
    component: LineItem
}

export const ReportLineItemComparing = () => {
    return(
        <div className="w-100">
            <LineItem/>
            <ExpandCard {...ExpandCard.args}/>
        </div>
        )
};
export const ReportLineItem = () => <LineItem/>;
