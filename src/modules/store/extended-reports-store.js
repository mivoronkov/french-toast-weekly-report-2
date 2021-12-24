import { createStore, createEffect } from 'effector';
import { apiInvoker } from '../api/api-axios';

export const getOldExtendReports = createEffect(
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

export const extendReports = createStore(null);
extendReports.on(getOldExtendReports.doneData, (_, data) => {
    return data;
});
