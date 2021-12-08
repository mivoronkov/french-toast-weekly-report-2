import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../img/logo.png';
import { LogoHeaderComponent } from '../../headers/logo-header/logo-header.component';
import { LaunchGuideContent } from '../../launch-guide/launch-guide-content.component';

export function LaunchGuide() {
    return (
        <main className='flex-grow-1 overflow-auto'>
            <LogoHeaderComponent title={'Launch Guide'} logo={logo} />
            <LaunchGuideContent />
        </main>
    );
}

LaunchGuide.propTypes = {};
