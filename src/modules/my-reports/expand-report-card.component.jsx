import React, {useState} from 'react';
import PropTypes from "prop-types";

import {CollapsingCard} from './collapsing-card.component';

export function ExpandReportCard({duration, weeklyInformation, weeklyNotations}){
    const [toggledState, setToggledState] = useState(false);

    let onClickHandler =() =>{
        setToggledState(prevState => !prevState);
    };
    let classList = ["row", "flex-nowrap", "align-items-center", "justify-content-between", "mb-0"];
    toggledState ? classList.push("bg-white") : classList.push("bg-dark");

    return(
        <div className="w-90">
            <div className={classList.join(" ")}>
                <p className="py-3 my-2 col-lg-7 collapsed-card-label">{duration}</p>
                <button
                    type="button"
                    className="btn dropdown-toggle col-lg-1 btn-dark me-4"
                    onClick={onClickHandler}
                >
                    {toggledState ? 'Collapse' : 'Expand'}
                </button>
            </div>
            <CollapsingCard isShouldCollapse={toggledState} weeklyNotations={weeklyNotations} weeklyInformation={weeklyInformation}/>
        </div>
    );
}

ExpandReportCard.propTypes = {
    duration: PropTypes.string,
    weeklyInformation: PropTypes.arrayOf(PropTypes.shape({
        stateName: PropTypes.string,
        stateLevel: PropTypes.number,
        comments: PropTypes.string
    })),
    weeklyNotations: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        title: PropTypes.string,
    }))
};