import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, useFormikContext } from 'formik';

export function TextAreaCounter({
    labelText,
    placeholderText,
    idText,
    textareaName,
    maxLength,
}) {
    const [charCounter, setCharCounter] = useState(0);
    const context = useFormikContext();
    const changeHandler = (event) => {
        setCharCounter(event.target.value.length);
        context.setFieldValue(textareaName, event.target.value);
    };

    return (
        <div className='mt-5'>
            <h2 className='content-block-title fw-bold text-center p-4'>
                <label htmlFor={idText}>{labelText}</label>
            </h2>
            <div className='textarea-with-counter'>
                <Field
                    id={idText}
                    name={textareaName}
                    component='textarea'
                    className='form-control fill-out-textarea'
                    placeholder={placeholderText}
                    maxLength={maxLength}
                    onChange={changeHandler}
                />
                <span className='textarea-counter user-select-none'>
                    {maxLength - charCounter}
                </span>
            </div>
        </div>
    );
}

TextAreaCounter.propTypes = {
    labelText: PropTypes.string,
    placeholderText: PropTypes.string,
    idText: PropTypes.string,
    textareaName: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
};
