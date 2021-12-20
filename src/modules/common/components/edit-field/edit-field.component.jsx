import React from 'react';
import PropTypes from 'prop-types';
import { getRandomId, toCamelCase, toDashCase } from '../../../../utils';
import { Field } from 'formik';

export function EditFieldComponent({ label, name, width = '100%' }) {
    let id, _name;
    if (name) {
        id = name;
        _name = name;
    } else if (label) {
        id = toDashCase(label);
        _name = toCamelCase(label);
    } else {
        id = getRandomId();
        _name = id;
    }
    const type = ['email', 'password'].includes(_name) ? _name : 'text';
    const label_tag = label ? (
        <label htmlFor={id} className='fw-bold'>
            {label}
        </label>
    ) : null;
    return (
        <div className='form-group mt-2 mb-2'>
            {label_tag}
            <Field
                type={type}
                name={_name}
                className='form-control'
                id={id}
                style={{ width: width }}
            />
        </div>
    );
}

EditFieldComponent.propTypes = {
    label: PropTypes.string,
    width: PropTypes.string,
    name: PropTypes.string,
};
