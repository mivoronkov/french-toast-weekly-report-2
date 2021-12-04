import React from 'react';
import PropTypes from 'prop-types';

export function ExtensibleSmile({ smileNumber,  additionalClasses}) {
        let smile;
        switch (smileNumber) {
            case 0:
                smile = 'unmarked';
                break;
            case 1:
                smile = 'very-sad';
                break;
            case 2:
                smile = 'sad';
                break;
            case 3:
                smile = 'neutral';
                break;
            case 4:
                smile = 'happy';
                break;
            case 5:
                smile = 'very-happy';
                break;
            default:
                smile = 'unmarked';
        }
        return (
            <img
                src={smile + '.svg'}
                alt='smile'
                className={'smile ' + additionalClasses}
            />
        );
}

ExtensibleSmile.propTypes = {
    smileNumber: PropTypes.number,
    additionalClasses: PropTypes.string
};