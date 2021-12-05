import React from 'react';

import {RadioSmile} from "../../modules/fill-out-a-report/smile-radio.component";

export default {
    title: 'Fill out a report',
    component: RadioSmile
}

const Template = (arg) => <RadioSmile {...arg}/>;
export const RadioSmileLabled = Template.bind({});
RadioSmileLabled.args ={
    valueText: 'Very Low',
    valueLevel: 2
}