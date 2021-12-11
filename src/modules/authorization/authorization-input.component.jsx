import React from 'react';
import PropTypes from 'prop-types';

export function AuthorizationInput({ inputText }) {
    const labelLink = `${inputText}-input`;
    const labelText = inputText.replaceAll('-', ' ');
    return (
        <div className='d-flex flex-column'>
            <label htmlFor={labelLink} className='fw-bold'>
                <p className='text-capitalize'>{labelText}</p>
            </label>
            <input type='text' id={labelLink} className='mb-2' />
        </div>
    );
}
AuthorizationInput.propTypes = {
    inputText: PropTypes.string,
};
