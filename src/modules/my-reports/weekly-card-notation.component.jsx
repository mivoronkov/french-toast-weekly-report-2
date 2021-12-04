import React from 'react';
import PropTypes, {checkPropTypes} from "prop-types";

export function WeeklyCardNotation({notationTitle, notationText}){
    return(
        <div className="m-4">
            <p className=" mb-1">{notationTitle}</p>
            <p>{notationText}</p>
        </div>
    );
}

WeeklyCardNotation.propTypes ={
    notationTitle: PropTypes.string,
    notationText: PropTypes.string
}