import React from 'react';
import PropTypes from 'prop-types';

export function LaunchGuideLineItem({
    headerText,
    infoText,
    imageIsFirst,
    image,
    imageAlt,
    children,
}) {
    let imageCode = (
        <div className='col-4'>
            <img className='launch-guide-img' src={image} alt={imageAlt} />
        </div>
    );
    return (
        <div className='row justify-content-center pb-5 pt-5'>
            {imageIsFirst ? imageCode : null}
            <div className='col-4 launch-guide-col'>
                <div className='launch-guide-text-header'>{headerText}</div>
                <div className='launch-guide-text-info'>{infoText}</div>
                {children}
            </div>
            {!imageIsFirst ? imageCode : null}
        </div>
    );
}

LaunchGuideLineItem.propTypes = {
    headerText: PropTypes.string.isRequired,
    infoText: PropTypes.string.isRequired,
    imageIsFirst: PropTypes.bool.isRequired,
    image: PropTypes.any.isRequired,
    imageAlt: PropTypes.string.isRequired,
    children: PropTypes.any,
};
