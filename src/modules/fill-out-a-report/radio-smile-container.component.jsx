import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RadioSmile } from './smile-radio.component';
import { Field } from 'formik';

export function RadioSmileContainer({
    mainLabel,
    containerInputName,
    containerLabels,
    commentTextareaId,
}) {
    const [showCommentTextarea, setShowCommentTextarea] = useState(false);
    const stubArray = Array(5).fill(0);
    let radioButtons = stubArray.map((_, index) => {
        return (
            <RadioSmile
                valueLevel={index + 1}
                inputName={containerInputName}
                valueText={containerLabels[index]}
                key={index}
            />
        );
    });

    return (
        <div className='mt-5'>
            <h2 className='content-block-title text-center fw-bold p-4'>
                {mainLabel}
            </h2>
            <div
                className='row'
                onClick={() => {
                    setShowCommentTextarea(true);
                }}>
                {radioButtons}
            </div>
            {showCommentTextarea ? (
                <div className='textarea-with-counter mt-5 '>
                    <Field
                        name={commentTextareaId}
                        component='textarea'
                        className='form-control fill-out-textarea'
                        placeholder='Leave a comment'
                    />
                </div>
            ) : null}
        </div>
    );
}

RadioSmileContainer.propTypes = {
    mainLabel: PropTypes.string,
    containerInputName: PropTypes.string,
    containerLabels: PropTypes.arrayOf(PropTypes.string),
    commentTextareaId: PropTypes.string.isRequired,
};
