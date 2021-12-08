import React from 'react';

import { SidebarComponent } from '../common/components/sidebar/sidebar.component';
import { LaunchGuide } from '../pages/launch-guide/launch-guide.component';

export function App() {
    return (
        <div className='d-flex h-100'>
            <SidebarComponent />
            <LaunchGuide />
        </div>
    );
}
