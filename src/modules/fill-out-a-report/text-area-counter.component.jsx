import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function TextAreaCounter({
    labelText,
    placeholderText,
    idText,
    maxLength,
}) {
    const [charCounter, setCharCounter] = useState(0);
    const changeHandler = (event) => {
        setCharCounter(event.target.value.length);
    };
    return (
        <div className='mt-5'>
            <h2 className='content-block-title fw-bold text-center p-4'>
                <label htmlFor={idText}>{labelText}</label>
            </h2>
            <div className='textarea-with-counter'>
                <textarea
                    id={idText}
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
    maxLength: PropTypes.number,
};
