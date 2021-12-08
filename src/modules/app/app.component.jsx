import React from 'react';

import { SidebarComponent } from '../common/components/sidebar/sidebar.component';
import { LogoHeaderComponent } from '../headers/logo-header/logo-header.component';
import { LaunchGuideContent } from '../launch-guide/launch-guide-content.component';

export function App() {
    return (
        <div className='d-flex h-100'>
            <SidebarComponent />
            <main className='flex-grow-1 overflow-auto'>
                <LogoHeaderComponent title={'Launch Guide'} />
                <LaunchGuideContent />
            </main>
        </div>
    );
}
