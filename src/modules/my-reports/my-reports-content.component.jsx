import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { ExpandAllButton } from '../common/components/buttons/expand-all-button.component';
import { LineItem } from '../my-reports/line-item.component';
import { ExpandCards } from './expand-cards.component';
import { SectionLabel } from '../common/components/labels/section-label.component';
import { useStore } from 'effector-react';
import { userInDBStore } from '../store/user-in-d-b-store';
import {
    getAllReports,
    getAllReportsFormatted,
    getClosesReport,
    reportsStore,
} from '../store/weekly-report-store';
import { Loading } from '../common/components/loading/loading.component';
import { setErrorToStore } from '../store/error-store';

export function MyReportsContent({ data }) {
    const params = useParams();
    const myReports = useStore(reportsStore);
    const [isInitialized, setIsInitialized] = useState(false);

    // Эффект, запрашивающий отчёты пользователя из БД
    useEffect(async () => {
        setIsInitialized(false);
        try {
            const reports = await getAllReportsFormatted({
                companyId: params.companyId,
                memberId: params.id,
            });
            setIsInitialized(true);
        } catch (error) {
            if (error?.response?.status === 404) {
                // Если получили 404, значит у пользователя ещё нет отчётов
                setIsInitialized(true);
            } else {
                setErrorToStore(error);
            }
        }
    }, [params.id, params.companyId]);

    return (
        <>
            {isInitialized ? (
                <div className='d-flex flex-column align-items-center w-100'>
                    <SectionLabel labelText={'past weekly reports'} />
                    {myReports.length === 0 ? (
                        <h1>You have no weekly reports</h1>
                    ) : (
                        <ExpandAllButton>
                            <LineItem />
                            <ExpandCards data={myReports} />
                        </ExpandAllButton>
                    )}
                </div>
            ) : (
                <Loading />
            )}
        </>
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
