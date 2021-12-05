import React from 'react';
import PropTypes from 'prop-types';

export function ExtensibleSmile({ smileNumber,  additionalClasses}) {
        let smile;
        let altText;
        switch (smileNumber) {
            case 0:
                smile = 'unmarked';
                altText= 'unmarked';
                break;
            case 1:
                smile = 'very-sad';
                altText= "Very sad emote";
                break;
            case 2:
                smile = 'sad';
                altText= "Sad emote";
                break;
            case 3:
                smile = 'neutral';
                altText= "Neutral emote";
                break;
            case 4:
                smile = 'happy';
                altText= "Happy emote";
                break;
            case 5:
                smile = 'very-happy';
                altText= "Very happy emote";
                break;
            default:
                smile = 'unmarked';
                altText= 'unmarked';
        }
        return (
            <img
                src={smile + '.svg'}
                alt={altText}
                className={'smile ' + additionalClasses}
            />
        );
}

ExtensibleSmile.propTypes = {
    smileNumber: PropTypes.number,
    additionalClasses: PropTypes.string,
    altText: PropTypes.string
};