import React from 'react';
import PropTypes from 'prop-types';

import { RadioSmile } from './smile-radio.component';

export function RadioSmileContainer({
    mainLabel,
    containerInputName,
    containerLabels,
}) {
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
            <div className='row'>{radioButtons}</div>
        </div>
    );
}

RadioSmileContainer.propTypes = {
    mainLabel: PropTypes.string,
    containerInputName: PropTypes.string,
    containerLabels: PropTypes.arrayOf(PropTypes.string),
};
