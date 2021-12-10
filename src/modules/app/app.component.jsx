import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Outlet,
} from 'react-router-dom';

import { SidebarComponent } from '../common/components/sidebar/sidebar.component';
import { LaunchGuide } from '../pages/launch-guide/launch-guide.component';
import { InviteYourTeam } from '../pages/invite-your-team/invite-your-team.component';
import { TeamReports } from '../pages/team-reports/team-reports.component';
import { MyReports } from '../pages/my-reports/my-reports.component';
import { FillOutAReport } from '../pages/fill-out-a-report/fill-out-a-report.component';
import { MyCompanyComponent } from '../pages/my-company/my-company.component';
import { WeeklyReportHistory } from '../pages/weekly-report-hisory/weekly-report-hisory.component';
import { TeamMembers } from '../pages/team-members/team-members.component';
import { EditMemberInformation } from '../pages/edit-member-information/edit-member-information.component';

import { teamReportsStub } from '../../stub-data/teamReportsStub';
import { myReportStub } from '../../stub-data/myReportStub';
import { fillOOutAReport } from '../../stub-data/fillOutAReportStub';
import { myCompanyStub } from '../../stub-data/myCompanyStub';
import { weeklyReportHistory } from '../../stub-data/weeklyReportHistoryStub';
import { teamMembersStub } from '../../stub-data/teamMembersStub';
import { editMemberInformationStub } from '../../stub-data/editMemberInformationStub';
import { TeamHeaderContainerComponent } from '../pages/team-reports/team-header-container.component';

export function App() {
    return (
        <div className='d-flex h-100'>
            <BrowserRouter>
                <SidebarComponent />
                <Routes>
                    <Route
                        path='/invite-your-team'
                        element={<InviteYourTeam />}
                    />
                    <Route
                        path='/team-reports'
                        element={<TeamHeaderContainerComponent />}>
                        <Route
                            path='immediate-team'
                            element={<TeamReports {...teamReportsStub} />}
                        />
                        <Route
                            path='extended-team'
                            element={
                                <WeeklyReportHistory {...weeklyReportHistory} />
                            }
                        />
                    </Route>
                    <Route
                        path='/my-reports'
                        element={<MyReports {...myReportStub} />}
                    />
                    <Route
                        path='/fill-out-a-report'
                        element={<FillOutAReport {...fillOOutAReport} />}
                    />
                    <Route
                        path='/fill-out-a-report'
                        element={<FillOutAReport {...fillOOutAReport} />}
                    />
                    <Route
                        path='/my-company'
                        element={<MyCompanyComponent {...myCompanyStub} />}
                    />
                    <Route
                        path='/team-members'
                        element={<TeamMembers {...teamMembersStub} />}
                    />
                    <Route
                        path='/edit-member-information'
                        element={
                            <EditMemberInformation
                                {...editMemberInformationStub}
                            />
                        }
                    />
                    <Route
                        path='/sign-out'
                        element={<Navigate replace to='/' />}
                    />
                    <Route path='/' element={<LaunchGuide />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
