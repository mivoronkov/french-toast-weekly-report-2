import React from 'react';
import PropTypes from 'prop-types';

export function TeamReportsNumberAvatar({ number, colStyle }) {
    return (
        <div className='col' style={colStyle}>
            <div className='user-avatar-circle justify-content-center align-items-center number-circle'>
                <h5 className='text-dark m-0'>+{number}</h5>
            </div>
        </div>
    );
}

TeamReportsNumberAvatar.propTypes = {
    number: PropTypes.number.isRequired,
    colStyle: PropTypes.any,
};
