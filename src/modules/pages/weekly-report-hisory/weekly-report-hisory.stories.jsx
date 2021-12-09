import React from 'react';
import { WeeklyReportHistory } from './weekly-report-hisory.component';

export default {
    title: 'Pages/Weekly report history',
    component: WeeklyReportHistory,
};

const Template = (args) => <WeeklyReportHistory {...args} />;
export const WeeklyReportHistoryTemplate = Template.bind({});
WeeklyReportHistoryTemplate.args = {
    previousPeriod: '5/16-5/22',
    currentPeriod: '5/23-5/29',
    totalMood: {
        overall: {
            memberName: 'Overall',
            mood: [0, 4, 2, 4, 4, 4, 3, 4, 5],
        },
        morale: {
            memberName: 'Morale',
            mood: [1, 1, 1, 3, 4, 2, 3, 4, 0],
        },
        stress: {
            memberName: 'Stress',
            mood: [3, 1, 2, 3, 4, 5, 3, 4, 2],
        },
        workload: {
            memberName: 'Workload',
            mood: [3, 1, 2, 3, 4, 5, 3, 5, 2],
        },
    },
    membersMood: [
        {
            memberName: 'Aleksey Petrov',
            mood: [0, 1, 2, 3, 4, 5, 3, 4, 5],
        },
        {
            memberName: 'Kshishet Bzejkevich',
            mood: [2, 5, 2, 3, 4, 2, 3, 4, 0],
        },
    ],
};
