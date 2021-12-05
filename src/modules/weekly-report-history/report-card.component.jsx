import React from 'react';
import PropTypes, { number } from 'prop-types';
import {ExtensibleSmile} from "../common/components/pictures/smile.component";

export function ReportEmotionalCard({ memberName, mood }) {
    let smiles = mood.map((el, index) => {
        return (
            <ExtensibleSmile additionalClasses={' col m-auto'} smileNumber={el} key={index}/>
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
