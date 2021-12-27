import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function ErrorShadow({ isError, ...props }) {
    return (
        <div
            style={
                isError && {
                    'box-shadow': '-1px 1px 30px 16px red',
                }
            }>
            {props.children}
        </div>
    );
}
ErrorShadow.propTypes = {
    isError: PropTypes.bool,
    children: PropTypes.any,
};
