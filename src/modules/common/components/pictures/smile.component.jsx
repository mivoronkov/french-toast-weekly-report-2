import React from 'react';
import PropTypes from 'prop-types';
import unmarked from '../../../../img/unmarked.svg';
import verySad from '../../../../img/very-sad.svg';
import sad from '../../../../img/sad.svg';
import neutral from '../../../../img/neutral.svg';
import happy from '../../../../img/happy.svg';
import veryHappy from '../../../../img/very-happy.svg';

export function ExtensibleSmile({ smileNumber, additionalClasses }) {
    let smile;
    let altText;
    switch (smileNumber) {
        case 0:
            smile = unmarked;
            altText = 'unmarked';
            break;
        case 1:
            smile = verySad;
            altText = 'Very sad emote';
            break;
        case 2:
            smile = sad;
            altText = 'Sad emote';
            break;
        case 3:
            smile = neutral;
            altText = 'Neutral emote';
            break;
        case 4:
            smile = happy;
            altText = 'Happy emote';
            break;
        case 5:
            smile = veryHappy;
            altText = 'Very happy emote';
            break;
        default:
            smile = unmarked;
            altText = 'unmarked';
    }
    return (
        <img
            src={smile}
            alt={altText}
            className={'smile ' + additionalClasses}
        />
    );
}

ExtensibleSmile.propTypes = {
    smileNumber: PropTypes.number,
    additionalClasses: PropTypes.string,
    altText: PropTypes.string,
};
