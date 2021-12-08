import React from 'react';

import { SidebarComponent } from '../common/components/sidebar/sidebar.component';
import { HeaderComponent } from '../common/components/header/header.component';
import { LaunchGuideContent } from '../launch-guide/launch-guide-content.component';

export function App() {
    return (
        <div className='d-flex h-100'>
            <SidebarComponent />
            <main className='flex-grow-1 overflow-auto'>
                <HeaderComponent title={'Launch Guide'} />
                <LaunchGuideContent />
            </main>
        </div>
    );
}
