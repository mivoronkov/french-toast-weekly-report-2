import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getAllReports = createEffect(async ({ companyId, memberId }) => {
    const resp = await apiInvoker.weeklyReport.getAll(companyId, memberId);
    return resp.data;
});
export const getClosesReport = createEffect(
    async ({ companyId, memberId, team, week }) => {
        const resp = await apiInvoker.weeklyReport.getInInterval(
            companyId,
            memberId,
            team,
            week
        );
        return resp.data;
    }
);
export const createReport = createEffect(
    async ({
        companyId,
        memberId,
        moraleLevel,
        moraleCommentary,
        stressLevel,
        stressCommentary,
        workloadLevel,
        workloadCommentary,
        highThisWeek,
        lowThisWeek,
        anythingElse,
        weekStartDate,
        weekEndDate,
    }) => {
        const resp = await apiInvoker.weeklyReport.createReport(
            companyId,
            memberId,
            moraleLevel,
            moraleCommentary,
            stressLevel,
            stressCommentary,
            workloadLevel,
            workloadCommentary,
            highThisWeek,
            lowThisWeek,
            anythingElse,
            weekStartDate,
            weekEndDate
        );
        return resp.data;
    }
);

export const reportsStore = createStore([]);
reportsStore
    .on(getAllReports.doneData, (_, data) => {
        return data;
    })
    .on(getClosesReport.doneData, (_, data) => {
        return data;
    });
