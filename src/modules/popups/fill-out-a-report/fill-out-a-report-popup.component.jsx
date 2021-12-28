import React from 'react';
import PropTypes from 'prop-types';

export function FillOutAReportPopupComponent({ onClose }) {
    return (
        <div className='modal-content top-border-color p-4 modal-size'>
            <div className='modal-header border-0'>
                <button type='button' className='btn-close' onClick={onClose} />
            </div>
            <div className='modal-body'>Report was successfully sent!</div>
            <div className='modal-footer modal-bottom-button border-0 mt-3'>
                <button
                    type='button'
                    className='btn save-button'
                    onClick={() => onClose()}>
                    Close
                </button>
            </div>
        </div>
    );
}

FillOutAReportPopupComponent.propTypes = {
    onClose: PropTypes.func.isRequired,
};
