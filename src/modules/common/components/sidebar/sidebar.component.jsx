import React from 'react';

import logo from '../../../../img/logo.png';
import { SidebarElementComponent } from './sidebar-element.component';

export function SidebarComponent() {
    return (
        <aside className='p-3 d-flex flex-column justify-content-between text'>
            <div>
                <img src={logo} alt='logo' />
                <ul className='nav nav-pills flex-column'>
                    <SidebarElementComponent
                        elementName={'Launch Guide'}
                        extraLinkClasses={'active'}
                    />
                    <SidebarElementComponent elementName={'Invite Your Team'} />
                    <SidebarElementComponent elementName={'Team Reports'} />
                    <SidebarElementComponent elementName={'My Reports'} />
                    <SidebarElementComponent
                        elementName={'Fill out a Report'}
                        extraLinkClasses={'text-warning'}
                    />
                </ul>
            </div>
            <div>
                <ul className='nav nav-pills flex-column'>
                    <SidebarElementComponent
                        elementName={'Back to Elite'}
                        extraClasses={'p-2 pb-3'}
                    />
                    <SidebarElementComponent
                        elementName={'My Company'}
                        extraClasses={'pt-3 pb-3'}
                    />
                    <SidebarElementComponent
                        elementName={' My Profile'}
                        extraClasses={'pt-3 pb-3'}
                        iconClass={'bi bi-gear-fill'}
                    />
                    <SidebarElementComponent
                        elementName={' Sign Out'}
                        iconClass={'bi bi-arrow-left-square-fill'}
                    />
                </ul>
            </div>
        </aside>
    );
}
