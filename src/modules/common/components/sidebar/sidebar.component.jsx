import React from 'react';

import logo from '../../../../img/logo.png';
import { SidebarElementComponent } from './sidebar-element.component';
import { AuthenticationButtonComponent } from '../buttons/authentication-button.component';
import { useStore } from 'effector-react';
import { userInDBStore } from '../../../store/user-in-d-b-store';

export function SidebarComponent() {
    const userInDB = useStore(userInDBStore);
    return (
        <aside className='p-3 d-flex flex-column justify-content-between text fixed-bottom h-100'>
            <div>
                <img src={logo} alt='logo' />
                <ul className='nav nav-pills flex-column'>
                    <SidebarElementComponent elementName={'Launch Guide'} />
                    <SidebarElementComponent
                        elementName={'Invite Your Team'}
                        link={'/invite-your-team'}
                    />
                    <SidebarElementComponent
                        elementName={'Team Reports'}
                        link={`/companies/${userInDB.companyId}/members/${userInDB.id}/team-reports`}
                        notExact={true}
                    />
                    <SidebarElementComponent
                        elementName={'My Reports'}
                        link={`/companies/${userInDB.companyId}/members/${userInDB.id}/reports`}
                    />
                    <SidebarElementComponent
                        elementName={'Fill out a Report'}
                        link={`/companies/${userInDB.companyId}/members/${userInDB.id}/reports/create`}
                    />
                </ul>
            </div>
            <div>
                <ul className='nav nav-pills flex-column'>
                    <SidebarElementComponent
                        elementName={'Back to Elite'}
                        extraClasses={'p-2 pb-3'}
                        link={'/back-to-elite'}
                    />
                    <SidebarElementComponent
                        elementName={'My Company'}
                        extraClasses={'pt-3 pb-3'}
                        link={`/companies/${userInDB.companyId}`}
                    />
                    <SidebarElementComponent
                        elementName={' My Profile'}
                        extraClasses={'pt-3 pb-3'}
                        iconClass={'bi bi-gear-fill'}
                        link={`/companies/${userInDB.companyId}/members/${userInDB.id}`}
                    />
                    <AuthenticationButtonComponent />
                </ul>
            </div>
        </aside>
    );
}
