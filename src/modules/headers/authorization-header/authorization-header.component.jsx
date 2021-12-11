import React from 'react';
import PropTypes from 'prop-types';
import { TextHeaderComponent } from '../../headers/text-header/text-header.component';

export function AuthorizationHeader() {
    return <TextHeaderComponent title={'Please log in.'} />;
}

AuthorizationHeader.propTypes = {};
