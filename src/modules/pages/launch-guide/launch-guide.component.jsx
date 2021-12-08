import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent } from '../../common/components/header/header.component';
import { LaunchGuideContent } from '../../launch-guide/launch-guide-content.component';

export function LaunchGuide() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <HeaderComponent title={'Launch Guide'} />
            <LaunchGuideContent />
        </main>
    );
}

LaunchGuide.propTypes = {};
