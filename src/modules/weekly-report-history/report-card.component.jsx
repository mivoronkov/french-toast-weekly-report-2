import React from 'react';
import PropTypes, { number } from 'prop-types';

export function ReportEmotionalCard({ memberName, mood }) {
    let smiles = mood.map((el, index) => {
        let smile;
        switch (el) {
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
                className='smile col m-auto'
                key={index}
            />
        );
    });

    return (
        <div className='row flex-nowrap bg-white w-85 align-items-center mb-2'>
            <p className='py-3 m-2 col-lg-5'>{memberName}</p>
            <div className='col-lg-7 row flex-nowrap justify-content-around'>
                {smiles}
            </div>
        </div>
    );
}

ReportEmotionalCard.propTypes = {
    memberName: PropTypes.string,
    mood: PropTypes.arrayOf(number),
};

ReportEmotionalCard.defaultProps = {
    memberName: 'Unknown',
    mood: new Array(9).fill(0),
};
