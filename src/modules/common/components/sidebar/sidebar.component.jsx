import React from 'react';

import logo from '../../../../img/logo.png';
import { SidebarElementComponent } from './sidebar-element.component';

export function SidebarComponent() {
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
                        link={'/team-reports'}
                    />
                    <SidebarElementComponent
                        elementName={'My Reports'}
                        link={'/my-reports'}
                    />
                    <SidebarElementComponent
                        elementName={'Fill out a Report'}
                        link={'/fill-out-a-report'}
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
                        link={'/my-company'}
                    />
                    <SidebarElementComponent
                        elementName={' My Profile'}
                        extraClasses={'pt-3 pb-3'}
                        iconClass={'bi bi-gear-fill'}
                        link={'/edit-member-information'}
                    />
                    <SidebarElementComponent
                        elementName={' Log in'}
                        iconClass={'bi bi-arrow-left-square-fill'}
                        link={'/authorization'}
                    />
                </ul>
            </div>
        </aside>
    );
}
