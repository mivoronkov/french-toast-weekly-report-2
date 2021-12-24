import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getOldTeamReports = createEffect(
    async ({ companyId, memberId, team, filter }) => {
        const resp = await apiInvoker.weeklyReport.getOldExtended(
            companyId,
            memberId,
            team,
            filter
        );
        return resp.data;
    }
);

export const OldPeriodReports = createStore(null);
OldPeriodReports.on(getOldTeamReports.doneData, (_, data) => {
    return data;
});
