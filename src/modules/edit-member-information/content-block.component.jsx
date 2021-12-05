import React from 'react';
import PropTypes from 'prop-types';

export function ContentBlock({ title, content }) {
    return (
        <div>
            <div className='fw-bold text-uppercase'>{title}</div>
            <hr className='mt-1' />
            {content}
        </div>
    );
}

ContentBlock.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.element,
};
