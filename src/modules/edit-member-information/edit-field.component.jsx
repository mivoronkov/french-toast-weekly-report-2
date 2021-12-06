import React from 'react';
import PropTypes from 'prop-types';
import { getRandomId, toDashCase } from '../../utils';

export function EditFieldComponent({ label, width = '100%', value = '' }) {
    const id = label ? toDashCase(label) : getRandomId();
    const label_tag = label ? (
        <label htmlFor={id} className='fw-bold'>
            {label}
        </label>
    ) : null;
    return (
        <div className='form-group mt-2 mb-2'>
            {label_tag}
            <input
                type='text'
                className='form-control'
                id={id}
                value={value}
                style={{ width: width }}
            />
        </div>
    );
}

EditFieldComponent.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.string,
};
